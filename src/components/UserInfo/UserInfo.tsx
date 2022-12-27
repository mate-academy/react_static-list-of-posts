import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a href={`mailto:${user.email}`} className="UserInfo">
    {user.name}
  </a>
);