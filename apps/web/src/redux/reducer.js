import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import songsReducer from './modules/songs';
import songslist from './modules/songslist';

const reducersCombination = combineReducers({
  auth,
  songsReducer,
  songslist,
  form
});

export default reducersCombination;
