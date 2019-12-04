import { fromJS } from 'immutable';

export const LOAD_LIST = 'songslist/LOAD_LIST';

const initialState = fromJS({
  loaded: false,
  defaultSongs: [],
  userSongs: []
});

export default function songsListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_LIST:
      return state.merge({
        defaultSongs: action.songs.defaultSongs,
        userSongs: action.songs.userSongs,
      });
      
    default:
      return state;
  }
}

export function loadSuccess(songs) {
  return {
    type: LOAD_LIST,
    songs
  }
}
