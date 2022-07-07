import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | undefined,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <div className="user-info__name" data-cy="user-name">
      {user ? user.name : undefined}
    </div>

    <div className="user-info__email" data-cy="user-email">
      {user ? user.email : undefined}
    </div>
  </div>
);
