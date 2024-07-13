import React from 'react';
import { User } from '../../types/user';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (user !== null) {
    return (
      <a className="UserInfo" href={'mailto:' + user.email}>
        {user.name}
      </a>
    );
  }

  return undefined;
};
