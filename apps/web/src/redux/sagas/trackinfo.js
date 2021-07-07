import { put, call } from 'redux-saga/effects';
import { loadTrackInfo } from '../modules/songs';

export function* loadTrack(action) {
  const {
    i,
    songs,
    songPrivacy,
    title,
    artist,
    album,
    genre,
    duration
  } = action;

  yield put(loadTrackInfo({
    index: i,
    songs: songs,
    songPrivacy: songPrivacy,
    title: title,
    artist: artist,
    album: album,
    genre: genre,
    duration: duration
  }))
}
