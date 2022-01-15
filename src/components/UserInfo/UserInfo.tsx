import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo:React.FC<User> = ({
  name,
  email,
}) => (
  <div className="content user-info">
    <strong className="title is-4">{name}</strong>
    {' '}
    <small className="subtitle is-6">{email}</small>
  </div>
);
