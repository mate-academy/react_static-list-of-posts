import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/UserTypes';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
