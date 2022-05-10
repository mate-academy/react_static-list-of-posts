import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo:React.FC<User> = ({
  name,
  email,
}) => (
  <div className="user-info">
    <strong data-cy="name" className="ures-info__name">{name}</strong>
    {' '}
    <small data-cy="email" className="user-info__email">{email}</small>
  </div>
);
