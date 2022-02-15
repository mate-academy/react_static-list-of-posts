import React from 'react';
import { User } from '../../types';

type Prop = {
  user: User;
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  return (
    <div className="user">
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};
