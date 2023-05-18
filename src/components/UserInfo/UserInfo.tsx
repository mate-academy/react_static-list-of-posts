import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/user';

type UserType = {
  user: User;
};

export const UserInfo: React.FC<UserType> = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  </p>
);
