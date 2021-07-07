import { put } from 'redux-saga/effects';
import { loadCurrentTrackTime } from '../modules/currenttime';

export function* loadTrackTime(trackTimeData) {
  const { currentTrackTime } = trackTimeData;



  yield put(loadCurrentTrackTime({
    currentTime: currentTrackTime
  }))
}
