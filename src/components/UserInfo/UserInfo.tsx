import React from 'react';
import { User } from '../../types/interfaces';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="user-info">
    <li
      className="user-info__name"
      data-cy="name"
    >
      {user && `Name: ${user.name}`}
    </li>
    <li
      className="user-info__email"
      data-cy="email"
    >
      {user && <a href={`${user.email}`}>{user.email}</a>}
    </li>
  </ul>
);
