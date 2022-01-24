import { User } from '../../types/User';
import './User.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p className="user__name">{`Автор поста: ${user.name}`}</p>
    <p className="user__email">{`Email автора: ${user.email}`}</p>
  </div>
);
