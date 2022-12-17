import React from 'react';

import type { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <p>
        {' Posted by  '}
        <a className="UserInfo" href={`mailto:${email}`}>
          {name}
        </a>
      </p>
    </>
  );
};
