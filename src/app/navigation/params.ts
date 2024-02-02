import { Movie } from "../../types";
import { HomeStackRoutes, MoviesStackRoutes, LoginStackRoutes } from "./routes";

export type MovieDetailParams = {
  selectedMovie: Movie;
};

export type HomeStackParamsList = {
  [HomeStackRoutes.Home]: undefined;
  [HomeStackRoutes.Detail]: MovieDetailParams;
};

export type MoviesStackParamsList = {
  [MoviesStackRoutes.AllMovies]: undefined;
  [MoviesStackRoutes.Favorites]: undefined;
};

export type LoginStackParamsList = {
  [LoginStackRoutes.Splash]: undefined;
  [LoginStackRoutes.Login]: undefined;
  [LoginStackRoutes.SignUp]: undefined;
};

export type AppStackParamsList = LoginStackParamsList &
  HomeStackParamsList &
  MoviesStackParamsList;
