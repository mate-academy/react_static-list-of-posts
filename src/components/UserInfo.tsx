import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user__info">
    <div className="user_info__name">{user.name}</div>
    <div className="user_info__email">{user.email}</div>
  </div>
);
