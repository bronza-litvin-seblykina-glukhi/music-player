import {takeEvery} from 'redux-saga/effects';
import {login} from './login';
import {loadList} from "./loadlist";
import {loadTrack} from './trackinfo';

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('LOAD_LIST', loadList);
    yield takeEvery('SET_PLAY_TRACK_INFO', loadTrack);
}
