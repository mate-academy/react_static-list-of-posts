import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <div data-cy="user-name">{`Name: ${user.name}`}</div>
      <div data-cy="user-email">{`Email: ${user.email}`}</div>
    </>
  );
};
