import {fromJS} from 'immutable';
import {getOauth} from '../../helpers/localStorage';

export const LOAD = 'auth/LOAD';
export const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL = 'auth/LOAD_FAIL';
export const LOGIN = 'auth/LOGIN';
export const LOGINING = 'auth/LOGINING';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'auth/LOGIN_FAIL';
export const LOGOUT = 'auth/LOGOUT';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';
const REGISTRATION = 'auth/REGISTRATION';

const initialState = fromJS({
    loaded: false,
    oauth: getOauth()
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:
            return state.set('loading', true);
        case LOAD_SUCCESS:
            return state.merge({
                loading: false,
                loaded: true,
                user: fromJS(action.result)
            });
        case LOAD_FAIL:
            return state.merge({
                loading: false,
                loaded: true,
                user: null
            });
        case LOGINING:
            return state.set('loggingIn', true);
        case LOGIN_SUCCESS:
            return state.merge({
                login: true,
                loggingIn: false,
                loginError: null,
                oauth: action.oauth
            });
        case LOGIN_FAIL:
            return state.merge({
                loggingIn: false,
                user: null,
                loginError: fromJS(action.error)
            });
        case LOGOUT:
            return state.setIn(['oauth', 'logouting'], true);
        case LOGOUT_SUCCESS:
            return state.clear();
        case LOGOUT_FAIL:
            return initialState;
        default:
            return state;
    }
}

export function login(username, password) {
    return {
        type: LOGIN,
        username,
        password
    };
}

export function registration(username,email, password, rePassword) {
    return {
        type: REGISTRATION,
        username,
        email,
        password,
        rePassword
    };
}

export function logining() {
    return {
        type: LOGINING
    };
}

export function loginSuccess(oauth) {
    console.log(oauth);
    return {type: LOGIN_SUCCESS, oauth};
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        error
    };
}
