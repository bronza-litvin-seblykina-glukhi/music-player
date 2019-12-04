import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import songs from './modules/songs';
import songslist from './modules/songslist';

const reducersCombination = combineReducers({
  auth,
  songs,
  songslist,
  form
});

export default reducersCombination;
