import { UserInfoProps } from '../../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <p>
    {' Posted by '}
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
