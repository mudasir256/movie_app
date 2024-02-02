import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../types"; 
interface FavoritesState {
  movies: Movie[];
}

const initialState: FavoritesState = {
  movies: [],
};


const moviesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const movieToAdd = { ...action.payload, isFavorite: true };
      state.movies.push(movieToAdd);
    },
    removeFromFavorites: (state, action: PayloadAction<Movie>) => {
      const movieToRemove = action.payload;
      state.movies = state.movies.filter(
        (movie) => movie.id !== movieToRemove.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;
