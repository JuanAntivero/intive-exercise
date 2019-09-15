import {
    FETCH_PLAYERS_BEGIN,
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_ERROR,
    FILTER_PLAYERS
  } from './playersActions.js';
  
  const initialState = {
    players: [],
    loading: false,
    error: null,
    nameFilter:"",
    positionFilter:"",
    ageFilter:"",
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
      case FILTER_PLAYERS:
        return {
          ...state,
          nameFilter:action.nameFilter,
          ageFilter:action.ageFilter,
          positionFilter:action.positionFilter
        };
        
      default:
        return state;
    }
  }

  export default playersReducer;