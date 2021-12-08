import React from 'react';

import { User } from '../types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p className="userInfo__name">{user.name}</p>
    <p className="userInfo__email">{user.email}</p>
  </div>
);
