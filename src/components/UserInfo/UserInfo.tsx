import React from 'react';
import { User } from './index';

type UserInfoProps = {
  user: User;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div className="UserInfo">
      <p>Name: {user.name}</p>
      <p>
        Email: <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
    </div>
  );
};
