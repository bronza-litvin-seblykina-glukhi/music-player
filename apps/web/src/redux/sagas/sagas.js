import {takeEvery} from 'redux-saga/effects';
import {login} from './login';
import {registration} from './registration';
import {resetCheck} from "./resetCheck";

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('REGISTRATION', registration);
    yield takeEvery('VALIDATE_USER_DATA', resetCheck)
}
