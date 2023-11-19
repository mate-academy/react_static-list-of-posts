import React from 'react';
import { User } from '../../types/api.types';
import './UserInfo.scss';

type UserInfoProps = {
  user: User
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
