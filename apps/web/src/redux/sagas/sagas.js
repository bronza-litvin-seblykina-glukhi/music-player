import {takeEvery} from 'redux-saga/effects';
import {login} from './login';

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
}
