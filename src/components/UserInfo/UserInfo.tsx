import React from 'react';

import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <div className="user-info__name">
      {`Author: ${user.name}`}
    </div>
    <a href="https://www.google.com/" className="user-info__email">
      {`Email: ${user.email}`}
    </a>
  </div>
);
