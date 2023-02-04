import React from 'react';
import { User } from '../../Types/users';
import './UserInfo.scss';

interface Props {
  user: User | null,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);
