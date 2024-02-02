import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useGetTrendingMoviesQuery } from "../../apiSlice";
import Search from "./Search";
import { addToFavorites, removeFromFavorites } from "../../moviesSlice";
import MoviesList from "../../../app/components/MoviesList";
import { HomeStackRoutes } from "../../../app/navigation/routes";
import { StatusBar } from "expo-status-bar";
import { Movie } from "../../../types";
import { RootState } from "./../../../app/store/store";
const AllMovies = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const { data: movies, error, isLoading } = useGetTrendingMoviesQuery({});

  useEffect(() => {
    if (movies) {
      setFilteredMovies(movies.results);
    }
  }, [movies]);

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate(HomeStackRoutes.Detail, {
      selectedMovie: movie,
    });
  };

  const toggleFavorite = (movie: Movie) => {
    try {
      dispatch(
        movie.isFavorite ? removeFromFavorites(movie) : addToFavorites(movie)
      );

      setFilteredMovies((prevMovies) =>
        prevMovies.map((m) =>
          m.id === movie.id ? { ...m, isFavorite: !m.isFavorite } : m
        )
      );
    } catch (error) {
      console.error("Error updating favorite status:", error);
    }
  };

  const handleSearch = (text: string) => {
    const filtered = movies?.results?.filter((movie) => {
      if (!movie) return false;
      const titleLower = movie.title ? movie.title.toLowerCase() : "";
      const nameLower = movie.name ? movie.name.toLowerCase() : "";

      return (
        titleLower.includes(text.toLowerCase()) ||
        nameLower.includes(text.toLowerCase())
      );
    });

    setFilteredMovies(filtered || []);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.search}>
          <Search
            text="Search Movies"
            buttonText="Search"
            onSearch={handleSearch}
          />
        </View>
        <MoviesList
          movies={filteredMovies}
          handleMoviePress={handleMoviePress}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          isLoading={isLoading}
          error={error}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "seashell",
  },
  search: {
    paddingBottom: 20,
  },
});

export default AllMovies;
