import React from 'react';
import { Users } from '../../react-app-env';

import './UserInfo.scss';

interface Prop {
  user: Users | undefined;
}

export const UserInfo: React.FC<Prop> = ({ user }) => (
  <>
    <h3 data-cy="user-name">{user?.name}</h3>
    <p data-cy="user-email">{user?.email}</p>
  </>
);
