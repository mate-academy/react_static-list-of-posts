import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <div
        className="userInfo"
        data-cy="post-info"
      >
        <p
          className="userInfo__name"
          data-cy="user-name"
        >
          {user.name}
        </p>

        <p
          className="userInfo__email"
          data-cy="user-email"
        >
          {user.email}
        </p>
      </div>
    )}
  </>
);
