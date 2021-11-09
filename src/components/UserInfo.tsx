import { User } from '../types';
import './UserInfo.scss';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <p className="user-info__name">{user.name}</p>
    <p className="user-info__email">{user.email}</p>
  </div>
);
