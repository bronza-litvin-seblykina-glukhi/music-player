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