import Image from "next/image";
import Link from "next/link";
import classes from "@/components/MovieItem.module.css";


export default async function MovieItem({ movies, title }) {
  return (
    <div>
      <h1 className={classes.title}>{`${title} Movies`}</h1>
      <div className={classes.movieGrid}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                className={classes.movieItem}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
