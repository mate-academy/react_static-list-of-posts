import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 data-cy="user-name">{user.name}</h3>
    <p data-cy="user-email">{user.email}</p>
  </>
);
