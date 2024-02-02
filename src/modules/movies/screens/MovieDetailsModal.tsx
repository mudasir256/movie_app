import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackParamsList } from "../../../app/navigation/params";
import { HomeStackRoutes } from "../../../app/navigation/routes";

type MovieDetailsModalRouteProps = RouteProp<
  HomeStackParamsList,
  HomeStackRoutes.Detail
>;

function MovieDetailsModal() {
  const navigation = useNavigation();
  const {
    params: { selectedMovie },
  } = useRoute<MovieDetailsModalRouteProps>();
  console.log("id", selectedMovie.id);
  const [isFavorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIcon}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={30}
            color={isFavorite ? "#FFFFFF" : "#FFFFFF"}
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
      <View style={styles.banner}>
        <Text style={styles.movieTitle}>
          {selectedMovie.title || selectedMovie.name}
        </Text>
        <Text style={styles.movieDescription}>{selectedMovie.overview}</Text>
        <Text style={styles.popularity}>
          Popularity: {selectedMovie.popularity}K
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  banner: {
    padding: 20,
    elevation: 5,
  },
  movieTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#421A37",
    marginBottom: 10,
    textAlign: "center",
  },
  popularity: {
    fontSize: 16,
    color: "#421A37",
    marginBottom: 10,
    textAlign: "left",
    fontWeight: "bold",
  },
  movieDescription: {
    fontSize: 18,
    textAlign: "left",
    marginBottom: 20,
    lineHeight: 24,
    color: "#421A37",
  },
  movieImage: {
    width: "100%",
    height: "40%",
    resizeMode: "cover",
    overflow: "hidden",
    marginBottom: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  favoriteIcon: {
    marginRight: 10,
  },
});

export default MovieDetailsModal;
