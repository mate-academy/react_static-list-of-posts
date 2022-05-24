import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <h3 className="userInfo__title">
      User info:
    </h3>
    <div className="userInfo__content">
      <div
        className="userInfo__item"
        data-cy="user-name"
      >
        {`Name: ${user.name}`}
      </div>
      <div
        className="userInfo__item"
        data-cy="user-email"
      >
        {`Email: ${user.email}`}
      </div>
    </div>
  </div>
);
