import {put, call} from 'redux-saga/effects';
import {loginSuccess} from '../modules/auth';
import {setToken} from "../../helpers/sessionStorage";

export function* login(action) {
    try {
        const {username, password} = action;
        const response = yield call(fetch, 'http://localhost:3001/api/user/authorize',
            {
                headers: {'Content-Type': 'application/json'},
                method: 'post',
                redirect: 'follow',
                body: JSON.stringify({
                    "loginData": username,
                    "password": password
                })
            });

        const token = yield response.json();
        setToken(token);
        yield put(loginSuccess(token));
    } catch (e) {
        console.log(e);
    }
}