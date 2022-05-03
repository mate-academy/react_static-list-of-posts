import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="user-info">
    <span className="user-info__title">Author:</span>
    <span data-cy="name">
      {
        user
          ? ` ${user.name}`
          : 'anonymous'
      }
    </span>
    <a
      className="user-info__link"
      href={`mailto:${user?.email}`}
      data-cy="email"
    >
      Email
    </a>
  </p>
);
