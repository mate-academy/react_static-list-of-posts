import React from 'react';

import { User } from '../../interfaces/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="post__user">
    <div>{name}</div>
    <a className="todo__email" href="mailto:{email}">{email}</a>
  </div>
);
