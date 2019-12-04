import { put, call } from 'redux-saga/effects';
import { loadTrackInfo } from '../modules/songs';

export function* loadTrack(action) {
  const { i, songs } = action;

  yield put(loadTrackInfo({ index: i, songs: songs }))
}
