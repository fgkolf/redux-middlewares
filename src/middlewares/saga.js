import { put, call, takeLatest } from 'redux-saga/effects';
import { REQUEST_MOVIE, setIsFetchingAction, setMovieAction } from '../actions/actions'

const apiRequest = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

function* fetchMovie(action) {
  try {
    yield put(setIsFetchingAction(true));
    const movie = yield call(apiRequest, `http://localhost:3001/movies/${action.payload}`);
    yield put(setMovieAction(movie));
  } catch (e) {
    // no error handling
  }
  yield put(setIsFetchingAction(false));
}

function* mySaga() {
  yield* [
    takeLatest(REQUEST_MOVIE, fetchMovie)
    ];
}

export default mySaga;
