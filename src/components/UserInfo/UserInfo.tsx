import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/user';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (user) {
    return (
      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      </p>
    );
  }

  return <p>{' Posted by  '}</p>;
};
