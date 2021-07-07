import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import view from './modules/view';
import songsReducer from './modules/songs';
import songslist from './modules/songslist';
import currentTrackTimeReducer from './modules/currenttime';

const reducersCombination = combineReducers({
  auth,
  songsReducer,
  songslist,
  currentTrackTimeReducer,
  view,
  form
});

export default reducersCombination;
