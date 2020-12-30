
import { fork } from 'redux-saga/effects';
import mySaga from "./pages/saga/saga";

export default function* rootSaga() {
  yield fork(mySaga);
}
