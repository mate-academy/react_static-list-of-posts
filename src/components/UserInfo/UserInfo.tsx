import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="post__content post__user user">
    <p className="user__name" data-cy="user-name">
      {user?.name}
    </p>

    <p className="user__email" data-cy="user-email">
      {user?.email}
    </p>
  </div>
);
