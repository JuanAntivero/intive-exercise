import React from 'react';
import PlayersSearchBar from '../PlayersSearchBar';
import PlayersSearchBarContainer from '../PlayersSearchBarContainer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Players Search Bar Container', () =>{
    
    it('renders all', () => {
        let sub = sinon.stub().returns(true);
        let positions = [];
        const playersSearchBar = mount(<PlayersSearchBarContainer onFilter={sub} playersPositions={positions}/>);
        expect(playersSearchBar.find('form').length).toBe(1);
        playersSearchBar.find('form').simulate('submit');
        expect(sub.called).toBe(true);
    });

});

describe('Players Search Bar', () =>{
    
    it('fires form submit', () => {
        let sub = sinon.stub().returns(true);
        let positions = [];
        const playersSearchBar = shallow(<PlayersSearchBar playersPositions={positions} onSubmit={sub}/>);
        expect(playersSearchBar.find('form').length).toBe(1);
        playersSearchBar.find('form').simulate('submit');
        expect(sub.called).toBe(true);
    });

});