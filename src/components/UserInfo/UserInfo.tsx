import { User } from '../../types/User';
import './UserInfo.scss';

interface ReceivedUser {
  user: User;
}

export const UserInfo: React.FC<ReceivedUser> = ({ user }) => (
  <a className="UserInfo" href={user ? `mailto:${user.email}` : '#'}>
    {user ? user.name : undefined}
  </a>
);
