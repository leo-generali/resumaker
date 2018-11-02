import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import ResumeEditorPage from 'pages/ResumeEditorPage';

describe('The resume editor page', () => {
  it('renders', () => {
    const wrapper = shallow(<ResumeEditorPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
