import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info" data-cy="user-name">
    <h2 className="user-info__name">
      {user.name}
    </h2>

    <p className="user-info__email" data-cy="user-email">
      <a href={`mailto:${user.email}`}>
        {user.email}
      </a>
    </p>
  </div>
);
