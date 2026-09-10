import { getMovies } from "@/lib/TMDB";
import classes from "../components/Hero-section.module.css";
import Image from "next/image";
export default async function Hero() {
  const movies = await getMovies("popular");
  const randomIndex = Math.floor(Math.random() * movies.length);
  const heroMovie = movies[randomIndex];
  const imageUrl = `https://image.tmdb.org/t/p/original${heroMovie.backdrop_path}`;

  return (
    <main className={classes.hero}>
      <Image src={imageUrl} alt="hero-img" fill className={classes.heroImg} />
      <h1 className={classes.heroTitle}>{heroMovie.title}</h1>
    </main>
  );
}
