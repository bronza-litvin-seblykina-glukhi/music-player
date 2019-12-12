import { fromJS } from 'immutable';

export const SET_CURRENT_PLAY_TIME = 'currenttime/SET_CURRENT_PLAY_TIME';

const initialState = fromJS({
  currentTime: null
});

export default function currentTrackTime(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CURRENT_PLAY_TIME:
      return action.currentTrackTimeData;

    default:
      return state;
  }
}

export function loadCurrentTrackTime(currentTrackTimeData) {
  return {
    type: SET_CURRENT_PLAY_TIME,
    currentTrackTimeData
  }
}
