import React from 'react';
import './UserInfo.scss';
import { type User } from '../../types/User';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);
