import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user">
      <h3 className="user__name">{name}</h3>
      <p className="user__email">{email}</p>
    </div>
  );
};
