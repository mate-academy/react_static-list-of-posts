import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="user-name">{user.name}</p>
    <p data-cy="user-email">{user.email}</p>
  </>
);
