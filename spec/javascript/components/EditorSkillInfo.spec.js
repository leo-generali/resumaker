import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import EditorSkillInfo from 'components/EditorSkillInfo';

describe("The editor's skill info component", () => {
  it('renders', () => {
    const wrapper = shallow(<EditorSkillInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
