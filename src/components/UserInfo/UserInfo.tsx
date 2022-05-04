import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/interfaces';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <p className="user-info__name" data-cy="name">
      {`Name: ${user ? user.name : null}`}
    </p>
    <p className="user-info__email" data-cy="email">
      {`Email: ${user ? user.email : null}`}
    </p>
  </div>
);
