export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const requestMovieAction = id => ({
  type: REQUEST_MOVIE,
  payload: id
});

export const setMovieAction = movie => ({
  type: SET_MOVIE,
  payload: movie
});

export const toggleFavoriteAction = id => ({
  type: TOGGLE_FAVORITE,
  payload: id
});