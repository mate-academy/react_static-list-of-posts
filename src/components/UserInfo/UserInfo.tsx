import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${user?.email}`}>
        {user?.name}
      </a>
    </p>
  );
};
