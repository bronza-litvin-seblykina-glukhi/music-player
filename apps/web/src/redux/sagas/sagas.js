import {takeEvery} from 'redux-saga/effects';
import {login} from './login';
import {loadList} from "./loadlist";

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('LOAD_LIST', loadList);
}
