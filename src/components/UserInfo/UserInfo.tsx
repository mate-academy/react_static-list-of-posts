import React from 'react';
import { User } from '../../react-app-env.d';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="box">
    <p data-cy="user-name">{user.name}</p>
    <p data-cy="user-email">{user.email}</p>
  </div>
);
