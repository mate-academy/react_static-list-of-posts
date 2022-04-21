import { Users } from '../../Types/users';
import './UserInfo.scss';

type Props = {
  user: Users;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <h2 className="userInfo__name">
      {user.name}
    </h2>
    <h3 className="userInfo__email">
      {user.email}
    </h3>
  </div>
);
