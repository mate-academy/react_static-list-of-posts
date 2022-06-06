import React from 'react';

import './UserInfo.scss';

import { User } from '../../types';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <h3 data-cy="user-name">
        {user.name}
      </h3>
      <h4 data-cy="user-email">
        {user.email}
      </h4>
    </>
  );
};
