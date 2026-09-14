export default async function fetchMovies(url) {
  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Failed to fetch movies: ${response.status} ${body}`);
  }

  const data = await response.json();
  return data;
}