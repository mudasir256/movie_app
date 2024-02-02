import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Movie } from "../../types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface MoviesListProps {
  movies: Movie[];
  handleMoviePress: (movie: Movie) => void;
  toggleFavorite: (movie: Movie) => void;
  favorite?: Movie[];
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
  favorites?: Movie[];
  message?: string[];
  favoriteToggle?: (movie: Movie) => void;
}
const MoviesList: React.FC<MoviesListProps> = ({
  movies,
  handleMoviePress,
  toggleFavorite,
  favorite,
  isLoading,
  error,
  favorites,
  favoriteToggle,
}) => {
  const data = favorite || movies;
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#421A37" />
        </View>
      ) : error && "message" in error ? (
        <Text style={styles.errorText}>
          Error fetching movies: {error.message}
        </Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.movieCard}
              onPress={() => handleMoviePress(item)}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.movieImage}
              />
              <View style={styles.cardRightContainer}>
                <View style={styles.movieDetails}>
                  <Text style={styles.movieTitle}>
                    {item.title || item.name}
                  </Text>
                  <Text style={styles.secondaryText}>
                    Release Date: {item.release_date}
                  </Text>
                  <Text style={styles.secondaryText}>
                    Cast Name: {item.cast_name || "Not available"}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => (favoriteToggle || toggleFavorite)(item)}
                    style={styles.favoriteIcon}
                  >
                    <Ionicons
                    style={styles.heart}
                      name={
                        (favorite || favorites)?.some(
                          (fav) => fav.id === item.id
                        )
                          ? "heart"
                          : "heart-outline"
                      }
                      size={30}
                      color={
                        (favorite || favorites)?.some(
                          (fav) => fav.id === item.id
                        )
                          ? "#421A37"
                          : "black"
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heart:{
    paddingTop:10,
    color: "#421A37",
  },
  movieCard: {
    flexDirection: "row",
    backgroundColor: "#BDA1B5",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    marginHorizontal: 18,
    justifyContent: "center",
  },
  movieImage: {
    width: "35%",
    height: 150,
    resizeMode: "cover",
  },
  movieDetails: {
    padding: 20,
    width: "68%",
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#421A37",
    width: 180,
  },
  secondaryText: {
    fontSize: 12,
    marginBottom: 5,
    color: "#421A37",
  },
  cardRightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "68%",
  },
  favoriteIcon: {
    padding: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 16,
  },
});

export default MoviesList;
