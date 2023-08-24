import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/types';

type UserInfoProps = {
  user: User;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <p>
    {' Posted by '}
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
