import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <div className="user__name">{user.name}</div>
    <div className="user__email">{user.email}</div>
  </div>
);
