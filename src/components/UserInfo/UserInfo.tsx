import React from 'react';

import { User } from '../../types/user';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="user">
    <h3 className="user__name">{name}</h3>
    <h3 className="user__email">{email}</h3>
  </div>
);
