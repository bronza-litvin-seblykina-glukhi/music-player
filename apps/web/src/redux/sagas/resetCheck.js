import {put, call} from 'redux-saga/effects';
import {setTemporaryToken} from "../../helpers/sessionStorage";
import {resetPasswordFail} from "../modules/auth";
import history from "../history";

export function* resetCheck(action) {
    try {
        const {login, email} = action;

        const url = 'http://localhost:3001/api/user/token?userName=' +
            login + '&userEmail=' + email;

        const response = yield call(fetch, url,
            {
                headers: {'Content-Type': 'application/json'},
                method: 'get'
            });
        const responseJson = yield response.json();

        if (!!responseJson.token) {
            setTemporaryToken(responseJson.token);
            history.push('/submitReset')
        } else {
            yield put(resetPasswordFail(new Error(responseJson.message)))
        }
    } catch (e) {
        yield put(resetPasswordFail(e));
    }
}