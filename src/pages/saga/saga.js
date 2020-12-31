
// import { message } from 'antd';
import { takeLatest, put } from 'redux-saga/effects';
import * as TYPES from './types';
import { getramdon } from './server'
import { setData } from './actions'


function* init() {
  const data = yield getramdon();
  console.log(data)
  if (data.code === 200) {
    return yield put(setData(data));
  }
  return ''
}


function* mySaga() {
  yield takeLatest(TYPES.GET_DATA, init);
}

export default mySaga;
