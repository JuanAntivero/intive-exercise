import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../Table';

Enzyme.configure({ adapter: new Adapter() });

const tcols = [{id:'name', columnName:'Player'},
               {id:'position', columnName:'Position'}];

const trows = [{
                name : "Romelu Lukaku",
                position : "Forward"
               }, {
                name : "David de Gea",
                position : "Goal Keeper"
            }];

const trowsEmpty = []

describe('Table component', () => {
    describe('Table', () => {
      it('should render self', () => {
        const props = {tcols: tcols, trows:trows};

        const enzymeWrapper = shallow(<Table {...props} />);
  
        expect(enzymeWrapper.find('table').hasClass('responsive-table')).toBe(true);
      });

      it('should render a special row when is empty', () => {
        const props = {tcols: tcols, trows:trowsEmpty};

        const enzymeWrapper = shallow(<Table {...props} />);
  
        expect(enzymeWrapper.find('td.no-records-found').text()).toBe('No records found')
      });

      it('should not render a special row when is not empty', () => {
        const props = {tcols: tcols, trows:trows};

        const enzymeWrapper = shallow(<Table {...props} />);
  
        expect(enzymeWrapper.find('td.no-records-found').exists()).toBe(false);
      });

      it('should render table header', () => {
        const props = {tcols: tcols, trows:trows};

        const enzymeWrapper = shallow(<Table {...props} />);
  
        const header = enzymeWrapper.find('thead tr th').map(cols => cols.text());
        expect(header).toEqual(expect.arrayContaining(['Player','Position']));
      });

      it('should render table rows', () => {
        const props = {tcols: tcols, trows:trows};

        const enzymeWrapper = shallow(<Table {...props} />);
  
        const rowData = enzymeWrapper.find('tbody tr td').map(rows => rows.text());
        expect(rowData).toEqual(expect.arrayContaining(["Romelu Lukaku","Forward","David de Gea","Goal Keeper"]));
      });

    });
  });