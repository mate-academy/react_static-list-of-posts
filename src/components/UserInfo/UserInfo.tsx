import React from 'react';
import { User } from '../../types';
import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" data-cy="user-info" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
