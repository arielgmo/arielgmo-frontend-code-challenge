import { combineReducers } from 'redux';
import reportReducer from './reportReducer';
import platformReducer from './platformReducer';

export default combineReducers({
  reportReducer,
  platformReducer,
});
