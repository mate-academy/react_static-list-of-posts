import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="name">{user.name}</div>
      <div className="email">{user.email}</div>
    </>
  );
};
