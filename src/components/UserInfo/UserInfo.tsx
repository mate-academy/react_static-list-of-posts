import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/interfaces';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <p className="user-info__name" data-cy="name">
      {`Name: ${user.name}`}
    </p>
    <p className="user-info__email" data-cy="email">
      {`Email: ${user.email}`}
    </p>
  </div>
);
