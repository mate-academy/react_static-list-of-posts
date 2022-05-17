import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo:React.FC<User> = ({
  name,
  email,
}) => (
  <div className="user-info">
    <p data-cy="name" className="ures-info__name">{name}</p>
    {' '}
    <p data-cy="email" className="user-info__email">{email}</p>
  </div>
);
