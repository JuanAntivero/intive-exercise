import {
    FETCH_PLAYERS_BEGIN,
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_ERROR
  } from './playersActions.js';
  
  const initialState = {
    players: [],
    loading: false,
    error: null
  };
  
 function playersReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PLAYERS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PLAYERS_SUCCESS:
        return {
          ...state,
          loading: false,
          players: action.payload.players
        };
  
      case FETCH_PLAYERS_ERROR:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          players: []
        };

      default:
        return state;
    }
  }

  export default playersReducer;