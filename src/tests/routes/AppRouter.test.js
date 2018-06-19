import React from 'react';
import { shallow } from 'enzyme';

import AppRouter from '../../routes/AppRouter';

let wrapper;

beforeAll(() => {
  wrapper = shallow(<AppRouter />);
});

test('deve conter o elemento Header', () => {
  const result = wrapper.find('Header');

  expect(result).toHaveLength(1);
});

