import React from 'react';
import { User } from '../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="post__autor">
    <p data-cy="user-name">{name}</p>
    <p data-cy="user-email">{`--- ${email}`}</p>
  </div>
);
