import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type UserInfoItem = {
  user: User;
};

export const UserInfo: React.FC<UserInfoItem> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
