import {setToken, setUsername} from "../../helpers/sessionStorage";
import {loginFail, loginSuccess} from "../modules/auth";
import history from "../history";

export function* resetCheck(action) {
    try {
        const {username, email} = action;

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

        // if (!!responseJson.token) {
        //     setToken(responseJson);
        //     setUsername(username);
        //     yield put(loginSuccess(responseJson));
        //     history.push('/');
        // } else {
        //     yield put(loginFail(new Error(responseJson.message)))
        // }
    } catch (e) {
        yield put(loginFail(e));
    }
}