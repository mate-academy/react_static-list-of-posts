import React from 'react';
import { UserInfoProps } from './UserInfo.types';
import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoProps> = ({
  user:
    {
      email,
      name,
    },
}) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
