import React from 'react';

import { User } from '../../types/Users';

import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="userInfo">
    <h3 className="userInfo__name">
      {
        user
          ? `Author: ${user.name}`
          : 'anonimus'
      }
    </h3>
    <a
      href={`mailto: ${user?.email}`}
      className="userInfo__link"
    >
      Email
    </a>
  </p>
);
