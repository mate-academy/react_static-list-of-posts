import React from 'react';
import { User } from '../../types';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <p className="UserInfo__name">
      {user && user.name}

    </p>
    <p className="UserInfo__email">
      {user && user.email}
    </p>
  </div>
);
