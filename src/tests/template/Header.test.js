import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../template/Header';

let wrapper;

beforeAll(() => {
  wrapper = shallow(<Header />);
});

test('deve renderizar Header corretamente', () => {
  expect(wrapper).toMatchSnapshot();
});

test('deve contar a quantidade correta de links', () => {
  const result = wrapper.find('NavLink')

  expect(result).toHaveLength(4);
});
