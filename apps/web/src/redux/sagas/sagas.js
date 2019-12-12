import {takeEvery} from 'redux-saga/effects';
import {login} from './login';
import {loadList} from "./loadlist";
import {loadTrack} from './trackinfo';
import {loadTrackTime} from './currenttracktime';
import {registration} from './registration';
import {resetCheck} from "./resetCheck";
import {resetSubmit} from "./resetSubmit";

export default function* watchRequests() {
    yield takeEvery('LOGIN', login);
    yield takeEvery('LOAD_LIST', loadList);
    yield takeEvery('SET_PLAY_TRACK_INFO', loadTrack);
    yield takeEvery('SET_CURRENT_PLAY_TIME', loadTrackTime)
    yield takeEvery('REGISTRATION', registration);
    yield takeEvery('RESET_CHECK', resetCheck);
    yield takeEvery('SUBMIT_RESET', resetSubmit)
}
