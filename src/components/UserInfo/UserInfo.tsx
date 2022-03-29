import React from 'react';

import { User } from '../../types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h2 className="user__name">
      {user.name}
    </h2>
    <a href={`mailto:${user.email}`} className="user__email">
      {user.email}
    </a>
  </div>
);
