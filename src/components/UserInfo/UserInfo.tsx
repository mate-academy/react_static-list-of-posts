import React from 'react';
import { Users } from '../../types/Users';

import './UserInfo.scss';

interface Props {
  user: Users;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h3 className="user__username">
      {user.username}
    </h3>
    <p className="user__name">
      {user.name}
    </p>
    <p className="user__email">
      {user.email}
    </p>
  </div>
);
