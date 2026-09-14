import { getToWatchMovie } from "@/lib/TMDB";
import MovieDetails from "../../../components/MovieDetails";

export default async function movieDescription({ params }) {
  const { id } = await params;

  const data = await getToWatchMovie(id);
  console.log(data);

  return <MovieDetails data={data} />;
}
