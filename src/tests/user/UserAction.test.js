import { addUser } from '../../user/UserAction';

test('should setup add user action object with provided values', () => {
  const userData = {
    nome: 'Rafael Dias',
    apelido: 'rafaDias',
    telefone: '(61) 98245-1511',
    senha: 'senhaSecreta',
  };
  const action = addUser(userData);

  expect(action).toEqual({
    type: 'ADD_USER',
    user: userData,
  });

});
