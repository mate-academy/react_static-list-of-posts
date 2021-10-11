import React from 'react';

import './UserInfo.scss';

import { UserTypes } from '../../types/UserTypes';

export const UserInfo: React.FC<UserTypes> = ({ name, username, email }) => (
  <div className="member">
    <h2 className="member__title">Member</h2>
    <div className="member__info">
      <span className="member__name">
        {name}
      </span>
      <span className="member__username">
        {username}
      </span>
      <a
        href={`${email}`}
        title={`${email}`}
        className="member__email"
      >
        {email}
      </a>
    </div>
  </div>
);
