import fetchMovie from "@/lib/fetchMovie";
export async function getTrendingMovies() {
  const url = "https://api.themoviedb.org/3/trending/movie/week";
  return fetchMovie(url);
}
export async function getMovies(category) {
  const url = `https://api.themoviedb.org/3/movie/${category}`;
  return fetchMovie(url);
}
export async function getByGenre(genreId) {
  const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
  return fetchMovie(url);
}
