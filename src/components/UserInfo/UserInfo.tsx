import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <div className="user-info__name" data-cy="name">
      <strong>Name:</strong>
      {' '}
      {user?.name}
    </div>
    <div className="user-info__email" data-cy="email">
      <strong>Email:</strong>
      {' '}
      {user?.email}
    </div>
  </div>
);
