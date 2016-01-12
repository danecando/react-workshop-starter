import React from 'react';
import { expect } from 'chai';
import { render, shallow } from 'enzyme';
import HelloWorld from './index';

describe('<HelloWorld />', () => {

  it('should render a bootstrap container', () => {
    const wrapper = shallow(<HelloWorld />);
    const container = wrapper.find('div.container');
    expect(container).to.have.length(1);
  });

  it('should display "Hello World" in an h1 element', () => {
    const wrapper = render(<HelloWorld />);
    expect(wrapper.find('h1').text()).to.contain('Hello World');
  });

});
