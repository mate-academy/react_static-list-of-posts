import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user posts__user">
    <h3 className="user__name">
      {user.name}
    </h3>
    <a href={user.email} className="user__email">
      {user.email}
    </a>
  </div>
);
