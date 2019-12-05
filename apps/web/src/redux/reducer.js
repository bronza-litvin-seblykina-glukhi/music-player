import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import view from './modules/view';

const reducersCombination = combineReducers({
  auth,
  view,
  form
});

export default reducersCombination;
