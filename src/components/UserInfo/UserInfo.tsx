import React from 'react';
import './UserInfo.scss';

import { User } from '../../types';

interface UserInfoProp {
  user: User
}

export const UserInfo: React.FC<UserInfoProp> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
