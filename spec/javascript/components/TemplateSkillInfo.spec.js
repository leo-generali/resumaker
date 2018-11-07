import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import TemplateSkillInfo from 'components/TemplateSkillInfo';

describe('The resume preview template skill info component', () => {
  it('renders', () => {
    const wrapper = shallow(<TemplateSkillInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
