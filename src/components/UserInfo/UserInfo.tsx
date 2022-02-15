import React from 'react';
import { User } from '../../types/user';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <div className="UserInfo__name">{name}</div>
    <div className="UserInfo__email">{email}</div>
  </div>
);
