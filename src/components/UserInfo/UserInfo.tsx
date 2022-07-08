import React from 'react';
import { User } from '../../type/User';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="content">
    <p className="card-content">
      <strong>{user.username}</strong>
      <br />
      <small data-cy="user-name">{user.name}</small>
      <br />
      <small data-cy="user-email">{user.email}</small>
    </p>
  </div>
);
