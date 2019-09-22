import playersReducer from '../playersReducer';
import * as actions from '../playersActions';

const initialState = {
    players: [],
    loading: false,
    error: null,
    nameFilter:"",
    positionFilter:"",
    ageFilter:"",
  };
describe('players reducer', () => {
    it('should return the initial state', () => {
        expect(playersReducer(undefined, {})).toEqual(initialState)
    });

    it('should handle FETCH_PLAYERS_BEGIN', () => {
        expect(playersReducer(initialState, { type: actions.FETCH_PLAYERS_BEGIN })).toEqual({
            players: [],
            loading: true,
            error: null,
            nameFilter:"",
            positionFilter:"",
            ageFilter:"",
          });
    });

    it('should handle FETCH_PLAYERS_SUCCESS', () => {
        expect(playersReducer(initialState, { type: actions.FETCH_PLAYERS_SUCCESS, payload: {players: ['Any player']} })).toEqual({
            players: ['Any player'],
            loading: false,
            error: null,
            nameFilter:"",
            positionFilter:"",
            ageFilter:"",
          });
    });

    it('should handle FETCH_PLAYERS_ERROR', () => {
        expect(playersReducer(initialState, { type: actions.FETCH_PLAYERS_ERROR, payload: {error: ['Any error']} })).toEqual({
            players: [],
            loading: false,
            error: ['Any error'],
            nameFilter:"",
            positionFilter:"",
            ageFilter:"",
          });
    });

    it('should handle FILTER_PLAYERS', () => {
        expect(playersReducer(initialState, { type: actions.FILTER_PLAYERS, 
                                              nameFilter: 'Any name',
                                              ageFilter: 18,
                                              positionFilter: 'Any position'})).toEqual({
            players: [],
            loading: false,
            error: null,
            nameFilter:'Any name',
            positionFilter:'Any position',
            ageFilter:18,
          });
    });
});