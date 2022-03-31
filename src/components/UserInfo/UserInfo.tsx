import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <span
      className="user-info__name"
      data-cy="name"
    >
      {user.name}
    </span>
    {' | '}
    <span
      className="user-info__email"
      data-cy="email"
    >
      {user.email}
    </span>
  </div>
);
