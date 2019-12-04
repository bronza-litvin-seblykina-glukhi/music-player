import { fromJS } from 'immutable';

export const LOAD_SUCCESS = 'songslist/LOAD_SUCCESS';

const initialState = fromJS({
  loaded: false,
  songslist: null
});

export default function songsListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOAD_SUCCESS':
      return state.merge({
        defaultSongs: action.songs.defaultSongs,
        userSongs: action.songs.userSongs,
      });

    default:
      return false;
  }
}

export function loadSuccess(songs) {
  return {
    type: 'LOAD_SUCCESS',
    songs
  }
}
