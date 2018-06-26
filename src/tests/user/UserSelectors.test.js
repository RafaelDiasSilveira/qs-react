import getUsers from "../../user/UserSelectors";
import { users } from "../fixtures/fixtures";

test('should get all users', () => {
  const result = getUsers(users);

  expect(result).toHaveLength(users.length);
});