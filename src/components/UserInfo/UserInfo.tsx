import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <h2 className="user-info__name">
      {user?.name}
    </h2>

    <p className="user-info__email">
      <a href={`mailto:${user.email}`} className="user-info__email--link">
        {user.email}
      </a>
    </p>
  </div>
);
