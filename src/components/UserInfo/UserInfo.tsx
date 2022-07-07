import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="author-info">
    <i className="email email--author" data-cy="user-email">{email}</i>
    <h4 className="author" data-cy="user-name">{name}</h4>
  </div>
);
