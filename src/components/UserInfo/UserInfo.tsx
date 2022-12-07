import React from 'react';
import { Users } from '../../types/Users';

type Props = {
  user: Users;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h2 className="user__name" data-cy="user-name">
      {user.name}
    </h2>
    <a href={`mailto:${user.email}`} className="user__email" data-cy="user-email">
      {user.email}
    </a>
  </div>
);
