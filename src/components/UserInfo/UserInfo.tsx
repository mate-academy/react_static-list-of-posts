import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={user.email}>
    {user.name}
  </a>
);
