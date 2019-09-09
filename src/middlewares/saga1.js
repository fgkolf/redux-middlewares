import { call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { CONTINUE_PROCESS, OPEN_WINDOW } from '../actions/actions'

function* openWindow(action) {

  try {
    const {openWindowCallback} = action.payload;
    const paramBefore = 'theBefore';
    yield delay(2000);
    const newWindow = yield call(openWindowCallback, 'http://localhost:3000/#/page2')
    const continueAction = yield take('fontas');
    console.log('ARRIVED AT THE POINT', paramBefore, continueAction.payload)
    newWindow.close();
  } catch (e) {
    console.log(e)
  }
}

function* continueProcess() {
  const paramAfter = 'theAfter';
  yield delay(2000);
  yield put({ type: 'fontas', payload: paramAfter })
}

function* mySaga() {
  yield* [
    takeLatest(OPEN_WINDOW, openWindow),
    takeLatest(CONTINUE_PROCESS, continueProcess)
  ];
}
export default mySaga;
