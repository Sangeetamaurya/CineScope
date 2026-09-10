import classes from "../components/GenereSelect.module.css";
import GenreFilter from "./GenereFilter";
export default function GenereSelect() {
  return (
    <div className={classes.main}>
      <p className={classes.title}>BROWSE MOVIES</p>
      <h1 className={classes.description}>Explore movies from every genre</h1>
      <GenreFilter/>
    </div>
  );
}
