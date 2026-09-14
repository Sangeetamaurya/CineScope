import fetchMovie from "@/lib/fetchMovie";
export async function getTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/week";
  const data = await fetchMovie(url);
  return data.results;
}
export async function getMovies(category) {
  const url = `https://api.themoviedb.org/3/movie/${category}`;
  const data = await fetchMovie(url);
  return data.results;
}
export async function getByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
  const data = await fetchMovie(url);
  return data.results;
}

export async function getToWatchMovie(movie_id) {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?append_to_response=credits,watch/providers`;
  return fetchMovie(url);
}
