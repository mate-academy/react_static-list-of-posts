import React from 'react';

import './UserInfo.scss';
import { User } from '../../react-app-env';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="userInfo">
    <li data-cy="user-name">
      {`Name: ${user.name}`}
    </li>
    <li data-cy="user-email">
      {'Email: '}
      <a href="#dd">
        {user.email}
      </a>
    </li>
  </ul>

);

// accepts a `user` object and renders at least a `name` and an
// `email`.
