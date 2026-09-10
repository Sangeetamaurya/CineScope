import AllGenereMovies from "../../components/AllGenereMovies";
import GenereSelect from "../../components/GenereSelect";
import GenreFilter from "../../components/GenereFilter";
import { getTrendingMovies, getMovies, getByGenre } from "@/lib/TMDB";
import MovieItem from "@/components/MovieItem";
import { movieTitle } from "../../lib/movieTitle";

export default async function Browse({ searchParams }) {
  const { genre } = await searchParams;
  const filterGenre = await getByGenre(genre);
  const title = movieTitle.find((movie) => movie.id === Number(genre))?.name;

  return (
    <div
      style={{
        width: "95%",
        margin: "0 auto",
      }}
    >
      <GenereSelect />
      {genre ? (
        <MovieItem movies={filterGenre} title={title} />
      ) : (
        <AllGenereMovies />
      )}
    </div>
  );
}
