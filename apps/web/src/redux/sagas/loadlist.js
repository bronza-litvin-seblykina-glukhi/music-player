import {put, call} from 'redux-saga/effects';
import {loadSuccess} from "../modules/songslist";

export function* loadList(action) {

    //const token = getToken() then use in request params

    try {
        const response = yield call(fetch, 'http://localhost:3001/api/audio/songs',
            {
                method: 'get',
                headers: {'Content-Type': 'application/json'},
            });
        const responseJson = yield response.json();

        if (!!responseJson.defaultSongs) {
            yield put(loadSuccess(responseJson));
        } else {
            // error in case can't load
        }
    } catch (e) {
        console.log(e);
    }
}
