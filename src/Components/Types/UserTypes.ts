export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserInfoProps = {
  user: User;
};
