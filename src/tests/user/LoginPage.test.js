import React from 'react';
import { shallow } from "enzyme";

import { LoginPage } from "../../user/LoginPage";
import { users } from '../fixtures/fixtures';

let loginUserSpy, historySpy, wrapper;

beforeEach(() => {
  loginUserSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <LoginPage
      onSubmit={loginUserSpy}
      history={historySpy}
      users={users}
    />
  );
});

test('should render LoginPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const user = {
    apelido: users[0].apelido,
    senha: users[0].senha,
  };

  wrapper.find('LoginForm').prop('onSubmit')(user);

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
});
