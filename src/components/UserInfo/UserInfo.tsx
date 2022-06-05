import React from 'react';

import './UserInfo.scss';
import { User } from '../../react-app-env';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userCard">
    <div className="user-name" data-cy="user-name">{user?.name}</div>
    <div className="email colorBlue" data-cy="user-email">{user?.email}</div>
  </div>
);
