import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h4>{`${user.username} - ${user.name}`}</h4>
    <p>{user.email}</p>
  </div>
);
