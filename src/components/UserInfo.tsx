import React from 'react';
import { User } from './types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <strong>{user.name}</strong>
    {' - '}
    <span>{user.email}</span>
  </div>
);
