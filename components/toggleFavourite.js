function toggleFavourite({ movie, isFav, dispatch, addMovie, removeMovie }) {
  if (isFav) {
    dispatch(removeMovie(movie.id));
  } else {
    dispatch(addMovie(movie));
  }
}

export default toggleFavourite;
