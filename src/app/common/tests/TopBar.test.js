import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TopBar from '../TopBar';

Enzyme.configure({ adapter: new Adapter() });

describe('TopBar component', () => {
    describe('TopBar', () => {
      it('should render self', () => {
        const props = {topBarText:'Any text'};

        const enzymeWrapper = shallow(<TopBar {...props} />);
  
        expect(enzymeWrapper.find('div').hasClass('top-bar')).toBe(true);
  
        expect(enzymeWrapper.find('div').text()).toBe('Any text');
      });
    });
  });