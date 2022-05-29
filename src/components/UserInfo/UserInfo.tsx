import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user_info ">
    <h4 data-cy="user-name">{user.name}</h4>
    <a data-cy="user-email" href="email">{user.email}</a>
  </div>
);
