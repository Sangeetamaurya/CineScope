import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};
const favouriteMovie = createSlice({
  name: "favouriteMovieSlice",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const exists = state.movies.some(
        (movie) => movie.id === action.payload.id,
      );

      if (!exists) {
        state.movies.push(action.payload);
      }
    },
    removeMovie: (state, action) => {
      const movieId = action.payload;

      state.movies = state.movies.filter((movie) => movie.id !== movieId);
    },
  },
});
export const { addMovie, removeMovie } = favouriteMovie.actions;
export default favouriteMovie.reducer;
