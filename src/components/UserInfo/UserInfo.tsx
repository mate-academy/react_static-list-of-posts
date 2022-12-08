import { User } from '../../types/user';

export const UserInfo: React.FC<User> = ({ name, email }: User) => (
  <a
    className="UserInfo"
    href={email}
  >
    {name}
  </a>
);
