import { User } from "./Types/User";
import usersFromServer from "./api/users";

export function getUser(userId: number): User | undefined {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser;
}
