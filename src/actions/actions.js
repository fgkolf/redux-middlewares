export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const SET_MOVIE = 'SET_MOVIE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const OPEN_WINDOW = 'OPEN_WINDOW';
export const CONTINUE_PROCESS = 'CONTINUE_PROCESS';

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

export const setIsFetchingAction = (bank, value) => ({
  type: SET_IS_FETCHING,
  payload: { value, bank }
});

export const openWindowAction = (openWindowCallback, bank) => ({
    type: OPEN_WINDOW,
    payload: { openWindowCallback, bank }
  })

export const continueProcessAction = (bank, data) => ({
  type: CONTINUE_PROCESS,
  payload: {data, bank}
})