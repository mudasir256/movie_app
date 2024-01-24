import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useGetTrendingMoviesQuery } from "../components/redux/apiSlice";
import Search from "./Search";
import { addToFavorites, removeFromFavorites } from "../components/redux/moviesSlice";
import MovieListItem from "../components/MovieListItem";

const AllMovies = () => {
  const dispatch = useDispatch();
  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery();
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigation = useNavigation();
  const favorites = useSelector((state) => state.favorites.movies);

  useEffect(() => {
    if (movies) {
      setFilteredMovies(movies.results);
    }
  }, [movies]);

  const handleMoviePress = (movie) => {
    navigation.navigate("MovieDetailsModal", {
      selectedMovie: movie,
    });
  };

  const toggleFavorite = async (movie) => {
    try {
      if (movie.isFavorite) {
        dispatch(removeFromFavorites(movie));
      } else {
        dispatch(addToFavorites(movie));
      }

      setFilteredMovies((prevMovies) =>
        prevMovies.map((m) =>
          m.id === movie.id ? { ...m, isFavorite: !m.isFavorite } : m
        )
      );
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  const handleSearch = (text) => {
    const filtered = movies.results.filter((movie) => {
      if (!movie) return false;
      const titleLower = movie.title ? movie.title.toLowerCase() : "";
      const nameLower = movie.name ? movie.name.toLowerCase() : "";

      return (
        titleLower.includes(text.toLowerCase()) ||
        nameLower.includes(text.toLowerCase())
      );
    });

    setFilteredMovies(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search
          text="Search Movies"
          buttonText="Search"
          onSearch={handleSearch}
        />
      </View>
      <MovieListItem
        movies={filteredMovies}
        handleMoviePress={handleMoviePress}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        isLoading={isLoading}
        error={error}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    paddingBottom: 20,
  },
});

export default AllMovies;
