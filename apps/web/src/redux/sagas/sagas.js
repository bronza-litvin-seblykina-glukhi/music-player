import {takeEvery} from 'redux-saga/effects';
import {LOGIN, loginFail, logining, loginSuccess} from '../modules/auth';

import {login} from './login';

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
}
