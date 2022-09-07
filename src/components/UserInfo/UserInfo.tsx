import React from 'react';
import { User } from '../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({
  user,
  user: {
    name,
    email,
  },
}) => user && (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={email}>
      {name}
    </a>
  </p>
);
