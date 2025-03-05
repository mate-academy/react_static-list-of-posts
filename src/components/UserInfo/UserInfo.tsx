import React from 'react';
import '../UserInfo/UserInfo.scss';
import { User } from '../Types/Users';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
