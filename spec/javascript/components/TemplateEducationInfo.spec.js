import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import TemplateEducationInfo from 'components/TemplateEducationInfo';

describe('The resume preview template education info component', () => {
  it('renders', () => {
    const wrapper = shallow(<TemplateEducationInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
