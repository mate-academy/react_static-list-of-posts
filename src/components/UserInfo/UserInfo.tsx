import React from 'react';
import { User } from '../../interfaces/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <div className="userInfo__name">
      {user.name}
    </div>
    <div className="userInfo__email">
      {user.email}
    </div>
  </div>
);
