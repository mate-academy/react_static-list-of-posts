import React from 'react';
import { Users } from '../../types/Users';
import './UserInfo.scss';

interface UserProps {
  user: Users;
}

export const UserInfo: React.FC<UserProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
