import React from 'react';
import { Users } from '../../types';
import './UserInfo.scss';

interface Props {
  user: Users;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h3 className="user__name" data-cy="user-name">{user.name}</h3>
    <a
      href="email"
      className="user__email"
      data-cy="user-email"
    >
      {user.email}
    </a>
  </div>
);
