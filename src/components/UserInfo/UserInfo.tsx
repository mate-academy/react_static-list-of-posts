import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <h1 data-cy="user-name" className="user-name">{user?.name}</h1>
    <p data-cy="user-email" className="user-email">{user?.email}</p>
  </div>
);
