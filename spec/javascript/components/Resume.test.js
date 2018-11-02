import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Resume from 'components/Resume';

describe('The resume component', () => {
  it('renders', () => {
    const wrapper = shallow(<Resume />);
    expect(wrapper.exists()).toBe(true);
  });
});
