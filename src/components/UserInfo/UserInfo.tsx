// Libraries
import React from 'react';

// Styles
import './UserInfo.scss';

// Types
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <p>
      {'Posted by '}

      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
