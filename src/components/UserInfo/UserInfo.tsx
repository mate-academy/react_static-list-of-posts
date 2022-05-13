import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="user-info">
    <li className="user-name" data-cy="name">
      {`Name: ${user?.name}`}
    </li>
    <li className="user-username" data-cy="username">
      {`Username: ${user?.username}`}
    </li>
    <li className="user-email" data-cy="email">
      {`Email: ${user?.email}`}
    </li>
  </ul>
);
