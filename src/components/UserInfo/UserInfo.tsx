import React from 'react';
import { User } from '../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => user && (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  </p>
);
