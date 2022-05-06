import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="user__name" data-cy="name">{user.name}</p>
    <p className="user__email" data-cy="email">{user.email}</p>
  </>
);
