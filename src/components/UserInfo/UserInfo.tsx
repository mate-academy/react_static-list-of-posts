import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
