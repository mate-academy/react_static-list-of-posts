import React from 'react';
import { User } from '../../app.typedef';

import './UserInfo.scss';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user = null }) => (
  user && (
    <div className="user">
      <p data-cy="user-name" className="user-name">{user.name}</p>
      <p data-cy="user-email" className="user-email">{user.email}</p>
    </div>

  )

);
