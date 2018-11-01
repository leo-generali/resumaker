import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Hello from 'packs/hello_react';

describe('Hello Component', () => {
  it('renders', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.exists()).toBe(true);
  });

  describe('when no name is given', () => {
    it('renders with "Hello David!"', () => {
      const wrapper = shallow(<Hello />);
      expect(wrapper.text()).toBe('Hello David!');
    });
  });
});
