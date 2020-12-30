
// import { message } from 'antd';
import { takeLatest } from 'redux-saga/effects';
import * as TYPES from './types';
import { getramdon } from './server'


function* init() {
  const data = yield getramdon();
  console.log(data)
  if (data.code === 200) {
    // return yield put(getUserInfoFail());
  }
  // return yield put(getUserInfoSuccess(data));
}


function* mySaga() {
  yield takeLatest(TYPES.GET_DATA, init);
}

export default mySaga;
