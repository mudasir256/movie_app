import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../components/redux/moviesSlice";
import MovieListItem from "../components/MovieListItem";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites.movies);
  console.log("Favorites State:", favorites);
  const dispatch = useDispatch();

  const toggleFavorite = (movie) => {
    dispatch(removeFromFavorites(movie));
  };

  return (
    <View style={styles.container}>
      <MovieListItem favorite={favorites} favoriteToggle={toggleFavorite} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default Favorite;

// moviesContainer: {
//   padding: 20,
// },
// movieCard: {
//   flexDirection: "row",
//   backgroundColor: "#fff",
//   borderRadius: 10,
//   overflow: "hidden",
//   marginBottom: 20,
//   shadowColor: "#000",
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.2,
//   shadowRadius: 4,
//   elevation: 5,
// },
// movieImage: {
//   width: "30%",
//   height: 150,
//   resizeMode: "cover",
// },
// movieDetails: {
//   padding: 20,
//   width: "68%",
// },
// movieTitle: {
//   fontSize: 14,
//   fontWeight: "bold",
//   marginBottom: 10,
//   color: "#421A37",
// },
// secondaryText: {
//   fontSize: 12,
//   color: "#666",
//   marginBottom: 5,
// },
// cardRightContainer: {
//   flexDirection: "row",
//   justifyContent: "space-between",
//   width: "68%",
// },
// favoriteIcon: {
//   padding: 10,
// },
// errorText: {
//   color: "red",
//   fontSize: 16,
//   marginBottom: 16,
// },

{
  /* <ScrollView contentContainerStyle={styles.moviesContainer} style={{ marginTop: 60 }}>
        {favorites &&
          favorites.map((movie, index) => (
            <TouchableOpacity key={index} style={styles.movieCard} onPress={() => toggleFavorite(movie)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.movieImage}
              />
              <View style={styles.cardRightContainer}>
                <View style={styles.movieDetails}>
                  <Text style={styles.movieTitle}>{movie.title || movie.name}</Text>
                  <Text style={styles.secondaryText}>Release Date: {movie.release_date}</Text>
                  <Text style={styles.secondaryText}>Cast Name: {movie.cast_name || "Not available"}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => toggleFavorite(movie)} style={styles.favoriteIcon}>
                    <Ionicons name="heart" size={30} color="#421A37" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView> */
}
