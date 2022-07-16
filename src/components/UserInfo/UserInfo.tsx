import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p className="user__name" data-cy="user-name">
      {`Author: ${user.name}`}
    </p>

    <a
      href={`mailto:${user.email}`}
      className="user__email"
      data-cy="user-email"
    >
      {user.email}
    </a>
  </div>
);
