import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <strong className="user-name">{user?.name}</strong>
    <br />
    <i className="user-email">{user?.email}</i>
  </div>
);
