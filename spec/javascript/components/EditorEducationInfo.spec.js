import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import EditorEducationInfo from 'components/EditorEducationInfo';

describe("The editor's education info component", () => {
  it('renders', () => {
    const wrapper = shallow(<EditorEducationInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
