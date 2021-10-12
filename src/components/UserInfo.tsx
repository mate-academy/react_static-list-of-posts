import { User } from '../types/User';

type Props = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="user-info">
    <div>{name}</div>
    <div>{email}</div>
  </div>
);
