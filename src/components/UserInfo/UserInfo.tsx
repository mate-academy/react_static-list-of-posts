import React from 'react';

import './UserInfo.scss';
import { User } from '../types/Users';

type Prop = {
  user: User;
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
  return (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  );
};
