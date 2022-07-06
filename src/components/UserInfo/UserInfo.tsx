import React from 'react';
import { User } from '../Types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <div className="userInfo">
    <p className="userInfo__item" data-cy="user-name">{user.name}</p>
    <p className="userInfo__item" data-cy="user-email">{user.email}</p>
  </div>
);
