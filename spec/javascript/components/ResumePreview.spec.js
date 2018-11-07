import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ResumePreview from 'components/ResumePreview';

describe('The resume preview component', () => {
  it('renders', () => {
    const wrapper = shallow(<ResumePreview />);
    expect(wrapper.exists()).toBe(true);
  });
});
