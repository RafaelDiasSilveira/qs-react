import React from 'react';
import { shallow } from "enzyme";
import moment from 'moment';

import BookForm from '../../book/BookForm';
import { books } from "../fixtures/fixtures";

let wrapper, onSubmit;

beforeAll(() => {
  onSubmit = jest.fn;
  wrapper = shallow(<BookForm onSubmit={onSubmit} />);

});

describe('should render BookForm correctly', () => {
  test('with data', () => {
    const wrapper = shallow(
      <BookForm
        book={books[0]}
        onSubmit={onSubmit}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test('without data', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('should set state correctly on input change', () => {
  test('when setting titulo input', () => {
    const value = 'Teste do GG';

    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('titulo')).toBe(value);
  });

  test('when setting autor input', () => {
    const value = 'Teste do GG';

    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });

    expect(wrapper.state('autor')).toBe(value);
  });

  test('when setting dataPublicacao input', () => {
    const now = moment("2018-12-25");

    wrapper.find('input').at(2).simulate('change', {
      target: { value: now }
    });

    expect(wrapper.state('dataPublicacao')).toBe(now);
  });

  test('when setting genero input', () => {
    const genero = 'romance';

    wrapper.find('select').at(0).simulate('change', {
      target: { value: genero }
    });

    expect(wrapper.state('genero')).toBe(genero);
  });
})


