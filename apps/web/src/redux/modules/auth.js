import { fromJS } from 'immutable';
import { getOauth } from '../../helpers/localStorage';

export const LOAD = 'chat/auth/LOAD';
export const LOAD_USER_SAGA = 'chat/auth/LOAD_USER_SAGA';
export const LOAD_SUCCESS = 'chat/auth/LOAD_SUCCESS';
const LOAD_FAIL = 'chat/auth/LOAD_FAIL';
export const LOGIN = 'chat/auth/LOGIN';
export const LOGINING = 'chat/auth/LOGINING';
export const LOGIN_SUCCESS = 'chat/auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'chat/auth/LOGIN_FAIL';
export const LOGOUT = 'chat/auth/LOGOUT';
export const LOGOUT_SUCCESS = 'chat/auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'chat/auth/LOGOUT_FAIL';
const REGISTRATION = 'chat/auth/REGISTRATION';
const REGISTRATION_SUCCESS = 'chat/auth/REGISTRATION_SUCCESS';
const REGISTRATION_FAIL = 'chat/auth/REGISTRATION_FAIL';
const REMOVE_REGISTRATION = 'chat/auth/REMOVE_REGISTRATION';
const REFRESH_TOKEN = 'chat/auth/REFRESH_TOKEN';
export const CHECK_AND_REFRESH_TOKEN = 'chat/auth/CHECK_AND_REFRESH_TOKEN';
export const REFRESH_TOKEN_SUCCESS = 'chat/auth/REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_FAIL = 'chat/auth/REFRESH_TOKEN_FAIL';

export const REQUIRING_PASS = 'chat/auth/REQUIRING_PASS';
export const REQUIRING_SUCCESS = 'chat/auth/REQUIRING_SUCCESS';
export const REQUIRING_FAIL = 'chat/auth/REQUIRING_FAIL';

export const RECOVERING_PASS = 'chat/auth/RECOVERING_PASS';
export const RECOVERING_SUCCESS = 'chat/auth/RECOVERING_SUCCESS';
export const RECOVERING_FAIL = 'chat/auth/RECOVERING_FAIL';

export const REMOVE_RECOVERING = 'chat/auth/REMOVE_RECOVERING';

const REFRESH_TOKEN_JOB_START = 'chat/auth/REFRESH_TOKEN_JOB_START';
export const RUN_REFRESH_TOKEN_CHECK = 'chat/auth/RUN_REFRESH_TOKEN_CHECK';

const CHANGE = 'redux-form/CHANGE';
const BLUR = 'redux-form/BLUR';
const FOCUS = 'redux-form/FOCUS';


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
    case REGISTRATION:
      return state.set('loading', true);
    case REGISTRATION_SUCCESS:
      return state
        .set('loading', false)
        .set('registration-success', true);
    case REGISTRATION_FAIL:
      return state
        .set('loading', false)
        .set('error', action.error.error_description);
    case REMOVE_REGISTRATION:
      return state
        .delete('registration-success');
    case REMOVE_RECOVERING:
      return state
        .delete('recoveringSuccess')
        .delete('requireSuccess')
        .delete('recoveryEmail')
        .deleteIn(['recover', 'error']);
    case REQUIRING_PASS:
      return state.set('loading', true).set('recoveryEmail', action.email);
    case REQUIRING_SUCCESS:
      return state
        .set('loading', false)
        .set('requireSuccess', true);
    case REQUIRING_FAIL:
      return state
        .set('loading', false)
        .setIn(['recover', 'error'], fromJS(action.error));
    case RECOVERING_SUCCESS:
      return state
        .set('loading', false)
        .set('recoveringSuccess', true);
    case RECOVERING_FAIL:
      return state
        .set('loading', false)
        .setIn(['recover', 'error'], fromJS(action.error));
    case FOCUS:
    case CHANGE:
    case BLUR: {
      if (state.get('error') || state.get('loginError')) {
        return state.delete('error').delete('loginError');
      }
      return state;
    }
    case REFRESH_TOKEN:
      return state.set('refreshing', true);
    case REFRESH_TOKEN_SUCCESS:
      return state.set('refreshing', false)
        .set('oauth', fromJS(action.oauth));
    case REFRESH_TOKEN_JOB_START:
      return state.setIn(['refreshJob', 'running'], true);
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.get('loaded');
}

export function load(nextState, replace) {
  return {
    type: LOAD_USER_SAGA,
    nextState,
    replace
  };
}

export function loading() {
  return {
    type: LOAD
  };
}

export function logining() {
  return {
    type: LOGINING
  };
}

export function loadSucces(resultUser) {
  return {
    type: LOAD_SUCCESS,
    result: resultUser
  };
}

export function loadFail(error) {
  return {
    type: LOAD_FAIL,
    error
  };
}

export function login(username, password, rememberMe) {
  return {
    type: LOGIN,
    username,
    password,
    rememberMe
  };
}

export function loginSuccess(oauth) {
  return { type: LOGIN_SUCCESS, oauth };
}

export function loginFail(error) {
  return {
    type: LOGIN_FAIL,
    error
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function logoutFail() {
  return {
    type: LOGOUT_FAIL
  };
}

export function registration(username, password, timezone) {
  return {
    types: [REGISTRATION, REGISTRATION_SUCCESS, REGISTRATION_FAIL],
    promise: client => client.post('/users/register',
      { data: { username, password, timezone } })
  };
}

export function requireNewPassword(email) {
  return {
    types: [REQUIRING_PASS, REQUIRING_SUCCESS, REQUIRING_FAIL],
    promise: client => client.post('/users/recover/password/request',
      { data: { email } }),
    email
  };
}

export function recoverPassword(email, password, genPass, useGenPass) {
  return {
    types: [RECOVERING_PASS, RECOVERING_SUCCESS, RECOVERING_FAIL],
    promise: client => client.post('/users/recover/password',
      {
        data: {
          email, password, genPass, useGenPass
        }
      })
  };
}

export function removeRegistration() {
  return {
    type: REMOVE_REGISTRATION
  };
}

export function removeRecovering() {
  return {
    type: REMOVE_RECOVERING
  };
}

export function refreshToken() {
  return {
    type: REFRESH_TOKEN
  };
}

export function refreshTokenSuccess(oauth) {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    oauth
  };
}

export function refreshTokenFail(error) {
  return {
    type: REFRESH_TOKEN_FAIL,
    error
  };
}

export function refreshTokenJobRun() {
  return {
    type: REFRESH_TOKEN_JOB_START
  };
}

export function runRefreshTokenCheck() {
  return {
    type: RUN_REFRESH_TOKEN_CHECK
  };
}

export function checkAndRefreshToken() {
  return {
    type: CHECK_AND_REFRESH_TOKEN
  };
}
