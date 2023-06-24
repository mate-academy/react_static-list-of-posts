import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type UserInfoItem = {
  user: User;
};

export const UserInfo: React.FC<UserInfoItem> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
