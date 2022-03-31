import React from 'react';

import { User } from '../../types/user';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h3 className="user__name">{user.name}</h3>
    <h3 className="user__email">{user.email}</h3>
  </div>
);
