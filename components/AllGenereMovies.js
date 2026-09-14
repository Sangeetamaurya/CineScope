import { getByGenre } from "@/lib/TMDB";
import MovieSection from "./MovieSection";
import classes from "./AllGenereMovies.module.css";

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
    <div className={classes.Movies}>
      <MovieSection movies={actionMovies} title="Action " />
      <MovieSection movies={adventureMovies} title="Adventure " />
      <MovieSection movies={animationMovies} title="Animation " />
      <MovieSection movies={comedyMovies} title="Comedy " />
      <MovieSection movies={crimeMovies} title="Crime " />
      <MovieSection movies={horrorMovies} title="Horror " />
      <MovieSection movies={romanceMovies} title="Romance " />
      <MovieSection movies={scienceFictionMovies} title="ScienceFiction" />
      <MovieSection movies={thrillerMovies} title="Thriller" />
    </div>
  );
}
