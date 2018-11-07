import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Editor from 'components/Editor';

describe('The resume editor component', () => {
  it('renders', () => {
    const wrapper = shallow(<Editor />);
    expect(wrapper.exists()).toBe(true);
  });
});
