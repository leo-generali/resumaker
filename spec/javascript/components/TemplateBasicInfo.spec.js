import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import TemplateBasicInfo from 'components/TemplateBasicInfo';

describe('The resume preview template basic info component', () => {
  it('renders', () => {
    const wrapper = shallow(<TemplateBasicInfo />);
    expect(wrapper.exists()).toBe(true);
  });
});
