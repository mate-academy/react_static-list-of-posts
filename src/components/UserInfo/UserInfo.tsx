import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2 data-cy="user-name">{user?.name}</h2>
    <a href={user?.email} data-cy="user-email">
      {user?.email}
    </a>
  </>
);
