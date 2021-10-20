import React from 'react';
import { User } from '../../types/User';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="user">
      Author:
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
