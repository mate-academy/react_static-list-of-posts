import React from 'react';
import { Users } from '../../types/users';

import './UserInfo.scss';

type Props = {
  user: Users | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <h2 className="UserInfo__name">
      User name
      {': '}
      <u>{user?.name}</u>
    </h2>

    <h3 className="UserInfo__email">
      User email
      {': '}
      <u>{user?.email}</u>
    </h3>
  </div>
);
