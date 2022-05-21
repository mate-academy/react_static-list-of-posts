import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="UserInfo">
    <span className="UserInfo__name" data-cy="user-name">
      {name}
    </span>
    <a data-cy="user-email" href="mailto:{email}">
      {email}
    </a>
  </div>
);
