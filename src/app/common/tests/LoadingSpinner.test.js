import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingSpinner from '../LoadingSpinner';

Enzyme.configure({ adapter: new Adapter() });

describe('LoadingSpinner component', () => {
    describe('LoadingSpinner', () => {
      it('should render self', () => {
        const enzymeWrapper = shallow(<LoadingSpinner/>);
  
        expect(enzymeWrapper.find('div').hasClass('spinner')).toBe(true);
      });
    });
  });