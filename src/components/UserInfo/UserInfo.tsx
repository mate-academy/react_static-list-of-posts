import React from 'react';

import './UserInfo.scss';
import { User } from '../../react-app-env';

type Props = {
  currentUser: User | undefined,
};

export const UserInfo: React.FC<Props> = ({ currentUser }) => (
  <>
    <p data-cy="user-name">
      name:
      {' '}
      {currentUser?.name}
    </p>
    <p data-cy="user-email">
      email:
      {' '}
      {currentUser?.email}
    </p>
  </>
);
