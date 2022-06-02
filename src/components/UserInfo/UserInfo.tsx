import React from 'react';

import { User } from '../../app.typedef';
import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h3 data-cy="user-name" className="user__name">{user.name}</h3>
    <a
      href="email"
      data-cy="user-email"
      className="user__email"
    >
      {user.email}
    </a>
  </div>
);
