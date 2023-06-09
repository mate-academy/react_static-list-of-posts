import React from 'react';
import { Users } from '../../types/Users';
import './UserInfo.scss';

interface Props {
  user: Users,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
