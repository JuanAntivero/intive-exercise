import * as actions from '../playersActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('actions', () => {
    it('should create an action to load API fetch', () => {
        const players=[{
            "contractUntil" : "2022-06-30",
            "dateOfBirth" : "1993-05-13",
            "jerseyNumber" : 9,
            "name" : "Romelu Lukaku",
            "nationality" : "Belgium",
            "position" : "Centre-Forward"
          }];

        const expectedAction = {
            type: actions.FETCH_PLAYERS_SUCCESS,
            payload: {players}
        }
        expect(actions.fetchPlayersSuccess(players)).toEqual(expectedAction)
    });

    it('should create an action to inform error', () => {
        const error={message:'Test Error'};
        const expectedAction = {
            type: actions.FETCH_PLAYERS_ERROR,
            payload: {error}
        }
        expect(actions.fetchPlayersError(error)).toEqual(expectedAction)
    });

    it('should create an action to update filters', () => {
        const nameFilter='Test Player';
        const ageFilter=99;
        const positionFilter='Goal Keeper';
        const expectedAction = {
            type: actions.FILTER_PLAYERS,
            nameFilter,
            ageFilter,
            positionFilter,
        }
        expect(actions.filterPlayers(nameFilter,positionFilter,ageFilter)).toEqual(expectedAction)
    });
});

//Async Actions

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('creates FETCH_PLAYERS_SUCCESS when fetching players has been done', () => {
    fetchMock.getOnce('/', {
      players: {}
    });
    
    const store = mockStore({players: [],
        loading: false,
        error: null,
        nameFilter:"",
        positionFilter:"",
        ageFilter:""});

    return store.dispatch(actions.fetchPlayers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(
        expect.arrayContaining([
          { type: actions.FETCH_PLAYERS_BEGIN },
          { type: actions.FETCH_PLAYERS_SUCCESS, payload: {players: expect.any(Array)}}
        ]));
    });
  });
});