import React from 'react';
import './UserInfo.scss';
import { UserInfoProps } from '../../types';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
