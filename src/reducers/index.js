import { combineReducers } from 'redux';
import notes from './noteReducers';
import session from './sessionReducers';

export default combineReducers({
  notes,
  session
});
