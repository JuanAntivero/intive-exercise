import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from '../ErrorBoundary';

Enzyme.configure({ adapter: new Adapter() });

function ComponentWithError(){
    return(null);
}

function ComponentWithoutError(){
    return(<div className='test'></div>);
}

describe('ErrorBoundary', () => {

    it('should catch an error', () =>{
        const enzymeWrapper = mount(<ErrorBoundary>
                                        <ComponentWithError/>
                                    </ErrorBoundary>);
        const error = 'Test Error';
        enzymeWrapper.find(ComponentWithError).simulateError(error);

        expect(enzymeWrapper.state()).toHaveProperty('error','Test Error');
        expect(enzymeWrapper.find('div').hasClass('error-boundary')).toBe(true);
    });

    it('should render children when no error found', () =>{
        const enzymeWrapper = mount(<ErrorBoundary>
                                        <ComponentWithoutError/>
                                    </ErrorBoundary>);

        expect(enzymeWrapper.find('div').hasClass('test')).toBe(true);
    });

    it('should show an error when passed by props', () =>{
        const error={
            error:'Test Error',
            errorInfo:{componentStack:'Test error stack'}
        };
        const enzymeWrapper = mount(<ErrorBoundary {...error}>
                                        <ComponentWithoutError/>
                                    </ErrorBoundary>);

        expect(enzymeWrapper.state()).toHaveProperty('error','Test Error');
        expect(enzymeWrapper.find('div').hasClass('error-boundary')).toBe(true);
    });

});