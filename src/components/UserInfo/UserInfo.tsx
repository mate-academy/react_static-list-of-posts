import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User;
};
export const UserInfo: React.FC<Props> = ({ user}) => (
  <div>
    <p data-cy="user-name">
      {user.name}
    </p>
    <p data-cy="user-email">
      {user.email}
    </p>
  </div>
);
