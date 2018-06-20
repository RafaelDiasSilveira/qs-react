import React from 'react';
import { shallow } from "enzyme";
import moment from 'moment';

import BookForm from '../../book/BookForm';
import { books } from "../fixtures/fixtures";

describe('should render BookForm correctly', () => {
  test('with data', () => {
    const wrapper = shallow(
      <BookForm
        book={books[0]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('without data', () => {
    const wrapper = shallow(<BookForm />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('should set state correctly on input change', () => {
  test('when setting titulo input', () => {
    const value = 'Teste do GG';
    const wrapper = shallow(<BookForm />);

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('titulo')).toBe(value);
  });

  test('when setting autor input', () => {
    const value = 'Teste do GG';
    const wrapper = shallow(<BookForm />);

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('autor')).toBe(value);
  });

  test('when setting dataPublicacao input', () => {
    const wrapper = shallow(<BookForm />);
    const now = moment("2018-12-25");

    wrapper.find('input').at(2).simulate('change', {
      target: { value: now }
    });

    console.log(wrapper.state('dataPublicacao'));
    console.log(now);

    expect(wrapper.state('dataPublicacao')).toBe(now);
  });
})


