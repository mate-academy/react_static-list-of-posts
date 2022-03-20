import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user posts__user">
    <h3 className="user__name">
      {user && user.name}
    </h3>
    <a href={user ? user.email : '#'} className="user__email">
      {user && user.email}
    </a>
  </div>
);
