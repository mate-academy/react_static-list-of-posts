import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <div className="user__name">{name}</div>
    <div className="user__email">{email}</div>
  </>
);
