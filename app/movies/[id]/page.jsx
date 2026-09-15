import { getToWatchMovie } from "@/lib/TMDB";
import MovieDetails from "../../../components/MovieDetails";
export async function generateMetadata({ params }) {
  const { id } = await params;

  const data = await getToWatchMovie(id);

  return {
    title: `${data.title} | CineScope`,
    description: data.overview,
  };
}

export default async function movieDescription({ params }) {
  const { id } = await params;

  const data = await getToWatchMovie(id);

  return <MovieDetails data={data} />;
}
