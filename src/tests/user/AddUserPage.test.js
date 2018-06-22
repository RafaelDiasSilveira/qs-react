import React from 'react';
import { shallow } from "enzyme";

import { AddUserPage } from "../../user/AddUserPage";
import { users } from "../fixtures/fixtures";

let addUserSpy, historySpy, wrapper;

beforeEach(() => {
  addUserSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <AddUserPage
      onSubmit={addUserSpy}
      history={historySpy}
    />
  );
});

test('should render AddUserPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('UserForm').prop('onSubmit')(users[0]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(addUserSpy).toHaveBeenLastCalledWith(users[0]);
});
