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
const REGISTRATION_FAIL = 'auth/REGISTRATION_FAIL';
const VALIDATE_RESET_PASSWORD = 'auth/VALIDATE_RESET_PASSWORD';
const VALIDATE_SUBMIT_RESET_PASSWORD = 'auth/VALIDATE_SUBMIT_RESET_PASSWORD';
const RESET_FAIL = 'auth/RESET_FAIL';

const initialState = fromJS({
    loaded: false,
    resetError: false
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
            return state.clear();
        case REGISTRATION_FAIL:
            return state.merge({
                registrationError: action.error.message
            });
        case RESET_FAIL:
            return state.set('resetError', true);
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

export function registration(firstName, lastName, username, email, password, rePassword) {
    return {
        type: REGISTRATION,
        firstName,
        lastName,
        username,
        email,
        password,
        rePassword
    };
}

export function registrationFail(error) {
    return {
        type: REGISTRATION_FAIL,
        error
    };
}

export function logining() {
    return {
        type: LOGINING
    };
}

export function loginSuccess(token) {
    console.log(token);
    return {type: LOGIN_SUCCESS, token};
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        error
    };
}

export function validateResetPassword(login, email) {
    return {
        type: VALIDATE_RESET_PASSWORD,
        login,
        email
    };
}

export function validateSubmitResetPassword(password, rePassword) {
    return {
        type: VALIDATE_SUBMIT_RESET_PASSWORD,
        password,
        rePassword
    };
}

export function resetPasswordFail(error) {
    return {
        type: RESET_FAIL,
        error
    };
}