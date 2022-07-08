import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Prors = {
  user: User | null
};

export const UserInfo: React.FC<Prors> = ({ user }) => (
  <div className="card__user-info">
    <p className="card__name" data-cy="user-name">{user?.name}</p>
    <p className="card__email" data-cy="user-email">{user?.email}</p>
  </div>
);
