import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>
    {' Posted by  '}

    {user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )}
  </p>
);
