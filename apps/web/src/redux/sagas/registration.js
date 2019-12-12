import {put, call} from 'redux-saga/effects';
import {registrationFail} from '../modules/auth';
import history from '../history';

export function* registration(action) {
    try {
        const {firstName, lastName, username, password, email} = action;

        const response = yield call(fetch, 'http://localhost:3001/api/user/register',
            {
                headers: {'Content-Type': 'application/json'},
                method: 'post',
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName,
                    "login": username,
                    "password": password,
                    "role": 'client',
                    "email": email,
                    "paidSubscription": true
                })
            });

        const responseJson = yield response.json();

        if (!!responseJson.token) {
            history.push('/');
        } else {
            yield put(registrationFail(new Error(responseJson.message)))
        }
    } catch (e) {
        yield put(registrationFail(e));
    }
}