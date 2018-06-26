import { login, logout } from '../../utils/auth';
import { users } from "../fixtures/fixtures";


test('should login a registred user', () => {
  const user = users[0];
  const result = login(user.apelido, user.senha, users);

  expect(result).toBeTruthy();
});

test('should not login a unregistred user', () => {
  const user =   {
    nome: 'Rafael Dias',
    apelido: 'teste2',
    telefone: '(61) 98245-1511',
    senha: 'senha',
  };

  const result = login(user.apelido, user.senha, users);

  expect(result).toBeFalsy();
});
