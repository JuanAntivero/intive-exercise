import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopBar from './common/TopBar';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PlayersPageContainer from '../players/PlayersPageContainer';
import ErrorBoundary from './common/ErrorBoundary';
import {Provider} from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App', () => {
  const initialState = {
    players: {
        players: [],
        loading: false,
        error: null,
        nameFilter:"",
        positionFilter:"",
        ageFilter:""
    }
  };
  let store = mockStore(initialState);
  it('should render children components', () => {

    const enzymeWrapper = mount(<Provider store={store}><App/></Provider>);

    expect(enzymeWrapper.find(TopBar).length).toBe(1);

    expect(enzymeWrapper.find(PlayersPageContainer).length).toBe(1);
  });
});
