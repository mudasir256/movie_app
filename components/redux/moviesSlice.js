import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "favorites",
  initialState: {
    movies: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      action.payload = { ...action.payload, isFavorite: true };
      const movieToAdd = action.payload;
      state.movies.push(movieToAdd);
    },
    removeFromFavorites: (state, action) => {
      const movieToRemove = action.payload;
      state.movies = state.movies.filter(
        (movie) => movie.id !== movieToRemove.id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;
