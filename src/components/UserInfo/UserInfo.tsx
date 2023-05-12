import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

type UserInfoType = {
  user: User
};

export const UserInfo: React.FC<UserInfoType> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
