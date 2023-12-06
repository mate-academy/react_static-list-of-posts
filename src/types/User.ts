export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
}

export interface UserInfoProps {
  user: User | undefined;
}
