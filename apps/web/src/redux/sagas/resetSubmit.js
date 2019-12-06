import {put, call} from 'redux-saga/effects';
import {getTemporaryToken} from "../../helpers/sessionStorage";
import {submitResetPasswordFail} from "../modules/auth";
import history from "../history";

export function* resetSubmit(action) {
    try {
        const {password} = action;

        const response = yield call(fetch, 'http://localhost:3001/api/user/reset',
            {
                headers: {'Content-Type': 'application/json'},
                method: 'post',
                body: JSON.stringify({
                    "token": getTemporaryToken(),
                    "password": password
                })
            });
        const responseJson = yield response.json();

        if (!!responseJson.token) {
            history.push('/login')
        } else {
            yield put(submitResetPasswordFail(new Error(responseJson.message)))
        }
    } catch (e) {
        yield put(submitResetPasswordFail(e));
    }
}