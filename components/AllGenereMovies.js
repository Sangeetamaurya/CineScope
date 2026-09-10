import { getByGenre } from "@/lib/TMDB";
import MovieItem from "@/components/MovieItem";

export default async function AllGenereMovies() {
  const [
    actionMovies,
    adventureMovies,
    animationMovies,
    comedyMovies,
    crimeMovies,
    horrorMovies,
    romanceMovies,
    scienceFictionMovies,
    thrillerMovies,
  ] = await Promise.all([
    getByGenre(28), // Action
    getByGenre(12), // Adventure
    getByGenre(16), // Animation
    getByGenre(35), // Comedy
    getByGenre(80), // Crime
    getByGenre(27), // Horror
    getByGenre(10749), // Romance
    getByGenre(878), // Science Fiction
    getByGenre(53), // Thriller
  ]);
  return (
    <div>
      <MovieItem movies={actionMovies} title="Action " />
      <MovieItem movies={adventureMovies} title="Adventure " />
      <MovieItem movies={animationMovies} title="Animation " />

      <MovieItem movies={comedyMovies} title="Comedy " />
      <MovieItem movies={crimeMovies} title="Crime " />
      <MovieItem movies={horrorMovies} title="Horror " />
      <MovieItem movies={romanceMovies} title="Romance " />
      <MovieItem movies={scienceFictionMovies} title="ScienceFiction" />
      <MovieItem movies={thrillerMovies} title="Thriller" />
    </div>
  );
}
