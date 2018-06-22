import { addBook } from '../../book/BookAction';

test('should setup add book action object with provided values', () => {
  const bookData = {
    titulo: 'Livro 1',
    autor: 'Rafael Dias',
    dataPublicacao: '2018-06-21',
    genero: 'novela',
  };
  const action = addBook(bookData);

  expect(action).toEqual({
    type: 'ADD_BOOK',
    book: bookData,
  });

});
