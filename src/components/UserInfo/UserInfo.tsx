import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <>
        <p data-cy="user-name">{user.name}</p>
        <p data-cy="user-email">{user.email}</p>
      </>
    )}
  </>
);
