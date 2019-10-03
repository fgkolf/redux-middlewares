import { call, delay, put, take, takeEvery, race } from 'redux-saga/effects'
import { CONTINUE_PROCESS, OPEN_WINDOW, setIsFetchingAction } from '../actions/actions'

function* openWindow(action) {
  let newWindow;
  const {openWindowCallback, bank} = action.payload;
  try {
    yield put(setIsFetchingAction(bank, true))
    const paramBefore = 'theBefore';
    newWindow = openWindowCallback('http://google.com');
    console.log('ONE STEP AT A TIME with window', newWindow);
    // newWindow.location.replace('http://localhost:3000/#/page2/alpha');
    newWindow.location.replace('http://facebook.com');
    const continueAction = yield take(`${bank}_continue`);
    console.log(`ARRIVED AT THE POINT for ${bank}`, paramBefore, continueAction.payload)
  } catch (e) {
    console.log(e)
  } finally {
      yield put(setIsFetchingAction(bank, false))
  }
  if (newWindow) {
    newWindow.close()
  }
}

function* f (action) {
  const { bank } = action.payload;
  yield race({
    wanted: call(openWindow, action),
    closed: take(`${bank}_closed`)
  })
}

function* continueProcess(action) {
  const { bank, data } = action.payload
  yield delay(2000);
  yield put({ type: `${bank}_continue`, payload: data })
}

function* mySaga() {
  yield* [
    takeEvery(OPEN_WINDOW, f),
    takeEvery(CONTINUE_PROCESS, continueProcess)
  ];
}
export default mySaga;
