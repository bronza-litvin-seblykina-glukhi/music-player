import {takeEvery} from 'redux-saga/effects';
import {login} from './login';
import {registration} from './registration';

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('REGISTRATION', registration);
}
