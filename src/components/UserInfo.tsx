import React from 'react';
import { User } from '../types/UserType';

export const UserInfo: React.FC<User> = ({
  username,
  email,
}) => (
  <div className="user__info">
    <span className="username">
      {username}
      {', '}
    </span>
    {'e-mail: '}
    {email}
  </div>
);
