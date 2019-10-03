import { take, fork, put, spawn } from 'redux-saga/effects';
import { REQUEST_MOVIE, setIsFetchingAction } from '../actions/actions'
import fetchMovie from './saga'

function* takeWithLoading(actionType, workerSaga) {
  let task;
  let finishAction;
  while (true) {
    try {
      const action = yield take(actionType);

      if (task) {
        task.cancel();
      }

      yield put(setIsFetchingAction(true));
      task = yield fork(workerSaga, action);
      task
        .toPromise()
        .then(() => {
          finishAction = setIsFetchingAction(false);
      })
      if (finishAction) {
        yield put(finishAction);
        finishAction = null;
      }
    } catch (e) {
      break;
    }
  }
}

function* rootSaga() {
  yield spawn(takeWithLoading, REQUEST_MOVIE, fetchMovie);
}

export default rootSaga;
