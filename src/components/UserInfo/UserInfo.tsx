import React from 'react';
import { Users } from '../../types/Users';

import './UserInfo.scss';

type User = {
  user: Users;
};

export const UserInfo: React.FC<User> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
