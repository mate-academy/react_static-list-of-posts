import React from 'react';

import { User } from '../../react-app-env';
import './UserInfo.scss';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p data-cy="user-name">
      Name:
      {' '}
      {user ? user.name : 'Unknown'}
    </p>
    <p data-cy="user-email">
      Email:
      {' '}
      {user ? user.email : 'Unknown'}
    </p>
  </div>
);
