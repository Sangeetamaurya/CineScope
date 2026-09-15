"use client";

import Image from "next/image";
import Link from "next/link";
import classes from "@/components/MovieItem.module.css";
import FavouriteButton from "./FaviouriteButton";
// import favouriteIcon from "@/Images/favouriteIcon.png";
// import { useDispatch, useSelector } from "react-redux";
// import { addMovie, removeMovie } from "@/store/favouriteMovieSlice";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function MovieItem({
  movies,
  title,
  handlePrev,
  handleNext,
  currentPage,
  lastPage,
  displayButton = true,
}) {
  // const dispatch = useDispatch();
  // const favourites = useSelector((state) => state.favouriteMovies.movies);

  // const toggleFavourite = (movie) => {
  //   const isFav = favourites.some((m) => m.id === movie.id);

  //   if (isFav) {
  //     dispatch(removeMovie(movie.id));
  //   } else {
  //     dispatch(addMovie(movie));
  //   }
  // };

  return (
    <div>
      {title ? <h1 className={classes.title}>{`${title} Movies`}</h1> : ""}
      <div className={classes.movieGrid}>
        {displayButton && currentPage !== 1 ? (
          <button onClick={handlePrev} className={classes.prevButton}>
            ⟨
          </button>
        ) : (
          ""
        )}
        {movies.map((movie) => {
          // const isFav = favourites.some((m) => m.id === movie.id);
          return (
            <div key={movie.id} className={classes.movieCard}>
              <div className={classes.imageWrapper}>
                <Link href={`/movies/${movie.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className={classes.movieItem}
                  />
                </Link>

                <FavouriteButton movie={movie} className={classes.favIcon} />
              </div>
            </div>
          );
        })}
        {displayButton && currentPage !== lastPage ? (
          <button onClick={handleNext} className={classes.nextButton}>
            ⟩
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
