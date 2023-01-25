import React from 'react';
import { UserType } from '../../types/User';

import './UserInfo.scss';

interface UserInfoPropsType {
  user: UserType;
}

export const UserInfo: React.FC<UserInfoPropsType> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
