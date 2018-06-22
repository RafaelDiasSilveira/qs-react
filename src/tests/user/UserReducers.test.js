import userReducers from "../../user/UserReducers";
import { users } from "../fixtures/fixtures";

test('should set default state', () => {
  const state = userReducers(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should add a user', () => {
  const action = { type: 'ADD_USER', user: users[0] }
  const state = userReducers(undefined, action);

  expect(state).toContainEqual(users[0]);
});
