import React from 'react';

import './UserInfo.scss';
import { User } from '../../Types/Types';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 data-cy="user-name">{user.name}</h3>
    <span data-cy="user-email">{user.email}</span>
  </>
);
