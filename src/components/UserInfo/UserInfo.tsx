/* eslint-disable max-len */
import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <img
      className="user-info__avatar"
      src="https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-17.jpg"
      alt="User avatar"
    />

    <div>
      <div className="user-info__username">
        {user.username}
        <span data-cy="user-name">{` [${user.name}]`}</span>
      </div>

      <a
        href={`mailto:${user.email}`}
        className="user-info__email"
        data-cy="user-email"
      >
        {user.email.toLowerCase()}
      </a>
    </div>
  </div>
);
