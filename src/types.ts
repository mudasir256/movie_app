import { ReactNode } from "react";

export type Movie = {
  popularity: ReactNode;
  isFavorite: any;
  cast_name: string;
  release_date: string;
  id: string;
  poster_path: string;
  title: string;
  name: string;
  overview: string;
  favorite: string;
};
