import React from 'react';
import { shallow } from "enzyme";

import { AddBookPage } from "../../book/AddBookPage";
import { books } from "../fixtures/fixtures";

let addBookSpy, historySpy, wrapper;

beforeEach(() => {
  addBookSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <AddBookPage
      onSubmit={addBookSpy}
      history={historySpy}
    />
  );
});

test('should render AddBookPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('BookForm').prop('onSubmit')(books[1]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(addBookSpy).toHaveBeenLastCalledWith(books[1]);
});
