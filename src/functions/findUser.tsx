import usersFromServer from '../api/users';

export function findUser(userId: number) {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}
