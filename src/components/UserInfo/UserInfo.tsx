import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ email, name }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
