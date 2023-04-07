import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, username } = user;

  return (
    <p>
      {username}

      <a className="UserInfo" href={user.email}>
        {name}
      </a>
    </p>
  );
};
