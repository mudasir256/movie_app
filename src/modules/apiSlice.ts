import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFhODMwNDhhNGNjYjAzNTY1YzU5ZjZhODYyMjUwZiIsInN1YiI6IjY1OWMwNGRjMGQxMWYyNmVkMDBjMzE5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-mBXJ3DBY7mHRN4EKQnPme4LGg4LoAR9xYSOhryzYvo"; 
export const apiSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", API_KEY);
      headers.set("Accept", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrendingMovies: builder.query({
      query: () => "trending/all/day?language=en-US",
    }),
  }),
});

export const { useGetTrendingMoviesQuery } = apiSlice;