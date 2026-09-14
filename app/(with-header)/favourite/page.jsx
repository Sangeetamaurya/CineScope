"use client";

import { useSelector, useDispatch } from "react-redux";
import MovieItem from "../../../components/MovieItem";

export default function favourite() {
  const movies = useSelector((state) => state.favouriteMovies.movies);
  return (
    <div>
      <MovieItem movies={movies} displayButton={false} />
    </div>
  );
}
