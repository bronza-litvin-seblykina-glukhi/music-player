import { takeEvery } from 'redux-saga/effects';
import { LOGIN } from '../modules/auth';
import { login } from './login';

export default function* watchRequests() {
  yield takeEvery(LOGIN, login);
}
