import {fromJS} from "immutable";

export function setToken(token) {
    try {
        sessionStorage.setItem('token', JSON.stringify(token));
    } catch (e) {
        console.warn(e);
    }
}

export function getToken() {
    try {
        return fromJS(JSON.parse(sessionStorage.getItem('token')));
    } catch (e) {
        console.warn(e);
    }
    return null;
}

export function setUsername(username) {
    try {
        sessionStorage.setItem('username', username);
    } catch (e) {
        console.warn(e);
    }
}

export function getUsername() {
    try {
        return sessionStorage.getItem('username');
    } catch (e) {
        console.warn(e);
    }
    return null;
}

export function setTemporaryToken(token) {
    try {
        sessionStorage.setItem('tokenTmp', token);
    } catch (e) {
        console.warn(e);
    }
}

export function getTemporaryToken() {
    try {
        return sessionStorage.getItem('tokenTmp');
    } catch (e) {
        console.warn(e);
    }
    return null;
}