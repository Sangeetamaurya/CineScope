import { configureStore } from "@reduxjs/toolkit";
import favouriteMovieSlice from "./favouriteMovieSlice";
const store = configureStore({
  reducer: {
    favouriteMovies: favouriteMovieSlice,
  },
});
export default store;
