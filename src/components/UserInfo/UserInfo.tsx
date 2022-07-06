import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/User';

export type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2 className="user-name" data-cy="user-name">
      {user.name}
      {' | '}
      {user.username}
    </h2>
    <h4 className="user-mail" data-cy="user-email">
      {user.email}
    </h4>
  </>
);
