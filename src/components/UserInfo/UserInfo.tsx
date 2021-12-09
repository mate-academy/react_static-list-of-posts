import React from 'react';

import { User } from '../../interfaces/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="post__user-info">
    <img className="post__image" src="./images/user.png" alt="avatar" />
    <div className="post__name">{name}</div>
    <a className="todo__email" href="mailto:{email}">{email}</a>
  </div>
);
