import React from 'react';
import { Users } from '../../types/Users';
import './UserInfo.scss';

type UserTypes = {
  user: Users;
};

export const UserInfo: React.FC<UserTypes> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
