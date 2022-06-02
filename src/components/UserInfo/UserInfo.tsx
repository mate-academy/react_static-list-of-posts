import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

interface UserInfoProps {
  user: User,
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }: UserInfoProps) => (
  <div>
    <h3 data-cy="user-name">{user?.name}</h3>
    <p data-cy="user-email">{user?.email}</p>
  </div>
);
