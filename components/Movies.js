import classes from "@/components/Movies.module.css";
import { getTrendingMovies, getMovies, getByGenre } from "@/lib/TMDB";
import MovieSection from "./MovieSection";

export default async function Movies() {
  const [
    trendingMovies,
    popularMovies,
    topRated,
    upcoming,
    actionMovies,
    comedyMovies,
    horrorMovies,
  ] = await Promise.all([
    getTrendingMovies(),
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
    getByGenre(28),
    getByGenre(35),
    getByGenre(27),
  ]);
   
  return (
    <div className={classes.Movies}>
      
      <MovieSection movies={trendingMovies} title="Trending" />
      <MovieSection movies={popularMovies} title="Popular" />
      <MovieSection movies={topRated} title="Top Rated" />
      <MovieSection movies={upcoming} title="Upcoming" />
      <MovieSection movies={actionMovies} title="Action" />
      <MovieSection movies={comedyMovies} title="Comedy" />
      <MovieSection movies={horrorMovies} title="Horror" />

    </div>
  );
}
