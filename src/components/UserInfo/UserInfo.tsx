import React from 'react';

import './UserInfo.scss';
import { Users } from '../../react-app-env';

type Props = {
  user: Users,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <h2 data-cy="user-name">
        {name}
      </h2>
      <a href={`email: ${email}`} data-cy="user-email">
        {email}
      </a>
    </>
  );
};
