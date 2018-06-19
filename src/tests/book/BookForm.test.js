import React from 'react';
import { shallow } from "enzyme";

import BookForm from '../../book/BookForm';
import { books } from "../fixtures/fixtures";

test('should render BookForm correctly with data', () => {
  const wrapper = shallow(
    <BookForm
      book={books[0]}
    />
  );

  expect(wrapper).toMatchSnapshot();
});

test('should render BookForm correctly without data', () => {
  const wrapper = shallow(<BookForm />);

  expect(wrapper).toMatchSnapshot();
});

test('should set titulo state on input change', () => {
  const value = 'Teste do GG';
  const wrapper = shallow(<BookForm />);

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('titulo')).toBe(value);
});

test('should set autor state on input change', () => {
  const value = 'Teste do GG';
  const wrapper = shallow(<BookForm />);

  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('autor')).toBe(value);
});
