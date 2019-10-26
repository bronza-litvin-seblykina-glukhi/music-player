import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';


const reducersCombination = combineReducers({
  auth,
  form
});

export default reducersCombination;
