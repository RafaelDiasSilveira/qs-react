// import uuid from 'uuid';

export const addBook = book => ({
  type: 'ADD_BOOK',
  // id: uuid(),
  book,
});

export default addBook;
