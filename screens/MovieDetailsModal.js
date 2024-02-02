import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MovieDetailsModal({ route, navigation }) {
  const { selectedMovie, updateSelectedMovies, handleFavorite } = route.params;
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
    if (handleFavorite) {
      handleFavorite(!isFavorite);
    }
  };
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={30}
            color={isFavorite ? "white" : "white"}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFavorite, toggleFavorite]);

  return (
    <View style={styles.container}>
      {selectedMovie.poster_path && (
        <Image
          style={styles.movieImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`,
          }}
        />
      )}
      <Text style={styles.movieTitle}>
        {selectedMovie.title || selectedMovie.name}
      </Text>
      <Text style={styles.movieDescription}>{selectedMovie.overview}</Text>
      {/* <Favorite selectedMovies={selectedMovies} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  movieDescription: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  movieImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    marginBottom: 20,
    borderRadius: 20,
  },
  favoriteIcon: {
    marginRight: 10,
  },
});

export default MovieDetailsModal;
