import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo = ({ user }: Props) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
