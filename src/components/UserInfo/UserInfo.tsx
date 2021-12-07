import './UserInfo.scss';
import { User } from '../../types/User';

type Props = User;

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="user">
    <h3>{name}</h3>
    <p className="user__email">{email}</p>
  </div>
);
