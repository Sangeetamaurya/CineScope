import Image from "next/image";
import classes from "./MovieDetails.module.css";
import BackButton from "./BackButton";

const TMDB_IMAGE = "https://image.tmdb.org/t/p";

export default function MovieDetails({ data }) {
  if (!data) return null;

  const backdropUrl = data.backdrop_path
    ? `${TMDB_IMAGE}/original${data.backdrop_path}`
    : null;

  const posterUrl = data.poster_path
    ? `${TMDB_IMAGE}/w500${data.poster_path}`
    : null;

  const rating = data.vote_average?.toFixed(1);
  const year = data.release_date?.slice(0, 4);

  const formatRuntime = (minutes) => {
    if (!minutes) return "";

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`;
  };

  return (
    <section className={classes.movieDetails}>
      {backdropUrl && (
        <Image
          src={backdropUrl}
          alt=""
          fill
          priority
          className={classes.backgroundImage}
          sizes="100vw"
        />
      )}

      <div className={classes.backgroundOverlay} />

      <div className={classes.topControls}>
        <BackButton classes={classes.iconButton} />
      </div>

      <div className={classes.content}>
        <div className={classes.posterWrapper}>
          {posterUrl && (
            <Image
              src={posterUrl}
              alt={data.title}
              width={220}
              height={330}
              className={classes.poster}
            />
          )}

          <button className={classes.playButton} aria-label="Play trailer">
            <span>▶</span>
          </button>
        </div>

        <div className={classes.info}>
          <h1 className={classes.title}>{data.title}</h1>

          <div className={classes.genres}>
            {data.genres?.map((genre) => (
              <span key={genre.id} className={classes.genre}>
                {genre.name}
              </span>
            ))}
          </div>

          <div className={classes.meta}>
            <span className={classes.rating}>
              <span className={classes.star}>★</span>
              {rating}
            </span>

            <span>/ 10</span>

            <span>{year}</span>

            <span>{data.origin_country?.[0]}</span>

            <span>{formatRuntime(data.runtime)}</span>

            {data.credits?.crew?.find(
              (person) => person.job === "Director",
            ) && (
              <span>
                By{" "}
                {
                  data.credits.crew.find((person) => person.job === "Director")
                    .name
                }
              </span>
            )}
          </div>

          <p className={classes.overview}>{data.overview}</p>

          <div className={classes.actions}>
            <button className={classes.trailerButton}>Play Trailer</button>

            <button className={classes.rateButton}>Rate Movie</button>
          </div>
        </div>
      </div>
    </section>
  );
}
