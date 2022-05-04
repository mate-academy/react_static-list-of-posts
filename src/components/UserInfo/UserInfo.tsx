import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo:React.FC<User> = ({
  name,
  email,
}) => (
  <div className="content user-info">
    <strong data-cy="name" className="title is-4">{name}</strong>
    {' '}
    <small data-cy="email" className="subtitle is-6">{email}</small>
  </div>
);
