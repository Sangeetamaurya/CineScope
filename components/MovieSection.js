// import type { Movie } from "@/models/Movie";

// type MovieSectionProps = {
//   title: string;
//   movies: Movie[];
// };
// export default function MovieSection({title,movies}:MovieSectionProps) {

// }
"use client";
import { useState } from "react";
import MovieItem from "./MovieItem";
export default function MovieSection({ title, movies }) {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(movies.length / 6);
  const startIndex = (currentPage - 1) * 6;
  const visibleMovies = movies.slice(startIndex, startIndex + 6);
  function handlePrev() {
    setCurrentPage(currentPage - 1);
  }
  function handleNext() {
    setCurrentPage(currentPage + 1);
  }
  return (
    <MovieItem
      movies={visibleMovies}
      handlePrev={handlePrev}
      handleNext={handleNext}
      currentPage={currentPage}
      lastPage={lastPage}
      title={title}
    />
  );
}
