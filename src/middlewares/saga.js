import { put, call } from 'redux-saga/effects';
import { setMovieAction } from '../actions/actions'

const apiRequest = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

function* fetchMovie(action) {
  try {
    const movie = yield call(apiRequest, `http://localhost:3001/movies/${action.payload}`);
    yield put(setMovieAction(movie));
  } catch (e) {
    // no error handling
    return e;
  }
  return null;
}

export default fetchMovie;
