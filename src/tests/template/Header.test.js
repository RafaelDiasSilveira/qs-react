import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../template/Header';

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Header />);
});

test('should render Header correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should contain the correct amount of links', () => {
  const result = wrapper.find('NavLink')

  expect(result).toHaveLength(5);
});
