import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../moviesSlice";
import MovieList from "../../../app/components/MoviesList";
import { HomeStackRoutes } from "../../../app/navigation/routes";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../../../types";
import { RootState } from "./../../../app/store/store";

const Favorite = () => {
  const navigation = useNavigation();
  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const dispatch = useDispatch();

  const toggleFavorite = (movie: Movie) => {
    dispatch(removeFromFavorites(movie));
  };

  const handleMoviePress = (movie: Movie) => {
    navigation.navigate(HomeStackRoutes.Detail, {
      selectedMovie: movie,
    });
  };

  return (
    <View style={styles.container}>
      <MovieList
        favorite={favorites}
        favoriteToggle={toggleFavorite}
        handleMoviePress={handleMoviePress}
        movies={[]}
        toggleFavorite={function (movie: Movie): void {
          throw new Error("Function not implemented.");
        }}
        isLoading={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "seashell",
  },
});

export default Favorite;
