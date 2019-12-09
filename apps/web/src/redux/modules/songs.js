import { fromJS } from 'immutable';

export const SET_PLAY_TRACK_INFO = 'songs/SET_PLAY_TRACK_INFO';

const initialState = fromJS({
  index: null,
  songs: null,
  songPrivacy: null,
  title: null,
  artist: null,
  genre: null,
  album: null
});

export default function songsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PLAY_TRACK_INFO:
      return action.trackInfo;

    default:
      return state;
  }
}

export function loadTrackInfo(trackInfo) {
  return {
    type: SET_PLAY_TRACK_INFO,
    trackInfo
  }
}
