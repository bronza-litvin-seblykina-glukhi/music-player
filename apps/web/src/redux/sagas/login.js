import {put, call} from 'redux-saga/effects';
import {loginSuccess, loginFail, login as loginAction} from '../modules/auth';
import {setToken, setUsername} from "../../helpers/sessionStorage";
import history from '../history';

export function* login(action) {
    try {
        const {username, password} = action;
        //     yield put(logining());
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
        const responseJson = yield response.json();

        if (response.ok) {
            setToken(responseJson);
            setUsername(username);
            yield put(loginSuccess(responseJson));
            history.push('/');
        } else {
            yield put(loginFail(new Error(responseJson.message)))
        }
    } catch (e) {
        yield put(loginFail(e));
    }
}