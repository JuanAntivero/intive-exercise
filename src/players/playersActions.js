import axios from "axios";

export const FETCH_PLAYERS_BEGIN = 'FETCH_PLAYERS_BEGIN';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_ERROR = 'FETCH_PLAYERS_ERROR';

export const fetchPlayersBegin = () => {
    return {
        type: FETCH_PLAYERS_BEGIN
    }
}

export const fetchPlayersSuccess = (players) => {
    return {
        type: FETCH_PLAYERS_SUCCESS,
        payload: {players}
    }
}

export const fetchPlayersError = (error) => {
    return {
        type: FETCH_PLAYERS_ERROR,
        payload: {error}
    }
}

export const fetchPlayers = () => {
    return dispatch => {
        dispatch(fetchPlayersBegin());
        axios.get('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
        .then(res => {
            dispatch(fetchPlayersSuccess(res.data));
        })
        .catch(e => {
            dispatch(fetchPlayersError(e));
        })
    }
}