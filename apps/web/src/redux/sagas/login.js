import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { loginFail, logining, loginSuccess } from '../modules/auth';

export function* login(action) {
  try {
    const { username, password } = action;
    yield put(logining());
    const result = yield call(axios.post, 'url', /* params */); // here should be request on server, that returns auth token
  
    yield put(loginSuccess(result.data));
  } catch (e) {
    yield put(loginFail(e));
  }
}
