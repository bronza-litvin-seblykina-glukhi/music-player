import {fromJS} from 'immutable';

export const LOAD_SUCCESS = 'songslist/LOAD_SUCCESS';

const initialState = {
    defaultSongs: [],
    userSongs: []
};

export default function songsListReducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD_SUCCESS:
            return {
                defaultSongs: action.songsInfo.defaultSongs,
                userSongs: action.songsInfo.userSongs
            };
        default:
            return state;
    }
}

export function loadSuccess(songsInfo) {
    return {
        type: LOAD_SUCCESS,
        songsInfo
    }
}
