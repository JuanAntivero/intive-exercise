import React from 'react';
import PlayersPage from '../PlayersPage';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import PlayersSearchBarContainer from '../PlayersSearchBarContainer';
import PlayersPageContainer from '../PlayersPageContainer';
import Table from '../../app/common/Table';
import LoadingSpinner from '../../app/common/LoadingSpinner';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

Enzyme.configure({ adapter: new Adapter() });

let props = {players: [],
            loading: false,
            error: null,
            playersPositions: ['Goal Keeper','Defender','Midfielder','Forward'],
            fetchPlayers : sinon.stub(),
            filterPlayers : sinon.stub()}

describe('Players Page', () =>{
    
    it('renders all children components', () => {
        const enzymeWrapper = shallow(<PlayersPage {...props}/>);
        expect(enzymeWrapper.find(PlayersSearchBarContainer).length).toBe(1);
        expect(enzymeWrapper.find(Table).length).toBe(1);
    });

    it('renders Loading Spinner when loading', () => {
        let loadingProps = {...props,loading:true}
        const enzymeWrapper = shallow(<PlayersPage {...loadingProps}/>);
        expect(enzymeWrapper.find(LoadingSpinner).length).toBe(1);
    });

    it('shows error on API Call Error', () => {
        let loadingProps = {...props,error:{message:'API Call Error', stack:'Test Stack'}}
        const enzymeWrapper = mount(<PlayersPage {...loadingProps}/>);
        expect(enzymeWrapper.find('div.error-boundary').length).toBe(1);
    });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Players Page Container', () =>{
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
    
    it('renders PlayersPage when called', () => {
        let store = mockStore(initialState);
        let enzymeWrapper =  mount(<PlayersPageContainer store={store}/>);
        expect(enzymeWrapper.find(PlayersPage).length).toBe(1);
    });

});