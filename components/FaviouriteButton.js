"use client";

import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "@/store/favouriteMovieSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function FavouriteButton({ movie, className }) {
  const dispatch = useDispatch();

  const favourites = useSelector(
    (state) => state.favouriteMovies.movies
  );

  const isFav = favourites.some((item) => item.id === movie.id);

  const toggleFavourite = () => {
    if (isFav) {
      dispatch(removeMovie(movie.id));
    } else {
      dispatch(addMovie(movie));
    }
  };

  return isFav ? (
    <FaHeart
      className={className}
      color="red"
      onClick={toggleFavourite}
    />
  ) : (
    <FaRegHeart
      className={className}
      color="white"
      onClick={toggleFavourite}
    />
  );
}