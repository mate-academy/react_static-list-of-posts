import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p data-cy="user-name">
      <strong>Name:</strong>
      {' '}
      {user ? user.name : 'Undefined'}
    </p>
    <p data-cy="user-email">
      <strong>Email:</strong>
      {' '}
      {user ? user.email : 'Undefined'}
    </p>
  </div>
);
