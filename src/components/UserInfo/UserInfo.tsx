import React from 'react';
import './UserInfo.scss';
import { UserType } from '../../types/User';

type Props = {
  user: UserType | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>
    {' Posted by '}

    <a className="UserInfo" href={`mailto:${user?.email}`}>
      {user?.name}
    </a>
  </p>
);
