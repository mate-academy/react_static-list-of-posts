import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  </p>
);
