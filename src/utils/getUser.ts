import { User } from '../types/User';
import usersFromServer from '../api/users';

export function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}
