import { combineReducers } from 'redux';
import playersReducer from './players/playersReducer.js';

export default combineReducers({
  players: playersReducer
});