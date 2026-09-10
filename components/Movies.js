import classes from "@/components/Movies.module.css";
import { getTrendingMovies, getMovies, getByGenre } from "@/lib/TMDB";
import MovieItem from "@/components/MovieItem";

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
      <MovieItem movies={trendingMovies} title="Trending" />
      <MovieItem movies={popularMovies} title="Popular" />
      <MovieItem movies={topRated} title="Top Rated" />
      <MovieItem movies={upcoming} title="Upcoming" />
      <MovieItem movies={actionMovies} title="Action" />
      <MovieItem movies={comedyMovies} title="Comedy" />
      <MovieItem movies={horrorMovies} title="Horror" />
    </div>
  );
}
