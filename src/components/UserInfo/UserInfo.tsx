import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>
    {' Posted by  '}

    {
      user
        ? (
          <a className="UserInfo" href={`mailto:${user.email}`}>
            {user.name || 'Unknown user'}
          </a>
        )
        : 'unknown user'
    }
  </p>
);
