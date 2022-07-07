import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p className="user__name" data-cy="user-name">
      {user.name}
    </p>

    <p className="user__email" data-cy="user-email">
      {user.email}
    </p>
  </div>
);
