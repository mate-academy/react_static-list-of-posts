import React from 'react';
import './UserInfo.scss';
import { User } from '../../interfaces/User';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <span>
    {user.name}
    &#160;&#160;
    {user.email}
  </span>
);
