import {fromJS} from 'immutable';

export const IS_LOGIN_PAGE = 'view/IS_LOGIN_PAGE';

const initialState = {
    isLoginPage: false
};

export default function viewReducer(state = initialState, action = {}) {
    switch (action.type) {
        case IS_LOGIN_PAGE:
            return {isLoginPage: true};
        default:
            return state;
    }
}