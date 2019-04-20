import { concat, of, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import {
  REQUEST_MOVIE, setIsFetchingAction,
  setMovieAction,
} from '../actions/actions'

const apiRequest = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

const fetchMovie = action$ => action$.pipe(
  ofType(REQUEST_MOVIE),
  mergeMap((action) =>
      concat(
        of(setIsFetchingAction(true)),
        from(apiRequest(`http://localhost:3001/movies/${action.payload}`))
        .pipe(
          mergeMap((data) => ([setMovieAction(data), setIsFetchingAction(false)]))
        )
      )
  )
)

const myEpic = combineEpics(fetchMovie);

export default myEpic;
