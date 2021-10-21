import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="user">
      <div className="user__name">{user.name}</div>
      <div className="user__email">{user.email}</div>
    </div>
  );
};
