
import classes from "./GenereFilter.module.css";
import Button from "./Button";

export default function GenreFilter() {
  return (
    <div className={classes.genreList}>
      <Button name="All"></Button>
      <Button id={28} name="Action" />
      <Button id={12} name="Adventure" />
      <Button id={16} name="Animation" />
      <Button id={35} name="Comedy" />
      <Button id={80} name="Crime" />
      <Button id={27} name="Horror" />
      <Button id={10749} name="Romance" />
      <Button id={878} name="Science Fiction" />
      <Button id={53} name="Thriller" />
    </div>
  );
}

{
  /* <Link href="/browse">All</Link>

      <Link href="/browse?genre=28">Action</Link>
      <Link href="/browse?genre=12">Adventure</Link>
      <Link href="/browse?genre=16">Animation</Link>
      <Link href="/browse?genre=35">Comedy</Link>
      <Link href="/browse?genre=80">Crime</Link>
      <Link href="/browse?genre=27">Horror</Link>
      <Link href="/browse?genre=10749">Romance</Link>
      <Link href="/browse?genre=878">Science Fiction</Link>
      <Link href="/browse?genre=53">Thriller</Link> */
}
