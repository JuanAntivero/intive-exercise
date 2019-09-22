import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () => {
    describe('Header', () => {
      it('should render self', () => {
        const props = {headerText:'Any text'};

        const enzymeWrapper = shallow(<Header {...props} />);
  
        expect(enzymeWrapper.find('h1').hasClass('header')).toBe(true);
  
        expect(enzymeWrapper.find('h1').text()).toBe('Any text');
      });
    });
  });