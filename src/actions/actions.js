export const SET_MOVIE = 'SET_MOVIE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export const setMovieAction = movie => ({
  type: SET_MOVIE,
  payload: movie
});

export const toggleFavoriteAction = id => ({
  type: TOGGLE_FAVORITE,
  payload: id
});

export const setIsFetchingAction = value => ({
  type: SET_IS_FETCHING,
  payload: value
});

export const requestMovieAction = id => {
  return function(dispatch) {
    dispatch(setIsFetchingAction(true));
    return fetch(`http://localhost:3001/movies/${id}`)
    .then(data => data.json())
    .then(movie => {
      dispatch(setMovieAction(movie));
      dispatch(setIsFetchingAction(false));
    })
  };
};