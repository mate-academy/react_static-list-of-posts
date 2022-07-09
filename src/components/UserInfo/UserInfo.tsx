import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p><strong>{user.username}</strong></p>
    <p data-cy="user-name">{user.name}</p>
    <p>{user.phone}</p>
    <p data-cy="user-email">{user.email}</p>
  </>
);
