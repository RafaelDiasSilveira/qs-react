import bookReducers from "../../book/BookReducers";
import { books } from "../fixtures/fixtures";

test('should set default state', () => {
  const state = bookReducers(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should add a book', () => {
  const action = { type: 'ADD_BOOK', book: books[1] }
  const state = bookReducers(undefined, action);

  expect(state).toContainEqual(books[1]);
});
