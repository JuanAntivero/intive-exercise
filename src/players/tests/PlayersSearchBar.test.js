import React from 'react';
import PlayersSearchBar from '../PlayersSearchBar';
import PlayersSearchBarContainer from '../PlayersSearchBarContainer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('Players Search Bar Container', () =>{
    
    it('should render all childrens', () => {
        let sub = sinon.stub().returns(true);
        let positions = [];
        const enzymeWrapper = mount(<PlayersSearchBarContainer onFilter={sub} playersPositions={positions}/>);
        expect(enzymeWrapper.find(PlayersSearchBar).length).toBe(1);
    });

    it('should clear filters on clear button click', () => {
        let sub = sinon.stub().returns(true);
        let positions = [];
        const enzymeWrapper = mount(<PlayersSearchBarContainer onFilter={sub} playersPositions={positions}/>);
        //Set values
        enzymeWrapper.find('[name="nameFilter"]').simulate('change', {target:{name:"nameFilter", value:"a"}});
        enzymeWrapper.find('[name="positionFilter"]').simulate('change', {target:{name:"positionFilter", value:"Goal Keeper"}});
        enzymeWrapper.find('[name="ageFilter"]').simulate('change', {target:{name:"ageFilter", value:1}});
        //Check values
        expect(enzymeWrapper.find('[name="nameFilter"]').props().value).toBe("a");
        expect(enzymeWrapper.find('[name="positionFilter"]').props().value).toBe("Goal Keeper");
        expect(enzymeWrapper.find('[name="ageFilter"]').props().value).toBe(1);
        //Clear values
        enzymeWrapper.find('.clearButton').simulate('click');
        //Check values
        expect(enzymeWrapper.find('[name="nameFilter"]').props().value).toBe("");
        expect(enzymeWrapper.find('[name="positionFilter"]').props().value).toBe("");
        expect(enzymeWrapper.find('[name="ageFilter"]').props().value).toBe("");
    });

});

describe('Players Search Bar', () =>{
    
    it('fires form submit', () => {
        let sub = sinon.stub().returns(true);
        let positions = [];
        const enzymeWrapper = shallow(<PlayersSearchBar playersPositions={positions} onSubmit={sub}/>);
        expect(enzymeWrapper.find('form').length).toBe(1);
        enzymeWrapper.find('form').simulate('submit');
        expect(sub.called).toBe(true);
    });

});