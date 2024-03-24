import React from 'react';
import { User } from '../../types/user';

interface UserIProps {
  user: User;
}

export const UserInfo: React.FC<UserIProps> = ({ user }) => (
  <a className="UserInfo" href={user.email}>
    {user.name}
  </a>
);
