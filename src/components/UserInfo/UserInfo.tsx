import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type UserInfoProp = {
  user: User
};

export const UserInfo: React.FC<UserInfoProp> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
