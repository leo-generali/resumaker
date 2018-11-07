import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import EditorBasicInfo from 'components/EditorBasicInfo';

describe("The editor's basic info component", () => {
  it('renders', () => {
    const wrapper = shallow(<EditorBasicInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
