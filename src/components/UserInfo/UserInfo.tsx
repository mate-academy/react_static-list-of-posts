import { User } from '../../types/User';
import './UserInfo.scss';

interface UserProps {
  user: User;
}

export const UserInfo = ({ user }: UserProps) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
