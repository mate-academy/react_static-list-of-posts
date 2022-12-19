import React from 'react';
import { Users } from '../../types/Users';

type Props = {
  user: Users;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user">
      <h2 className="user__name" data-cy="user-name">
        {name}
      </h2>
      <a href={`mailto:${email}`} className="user__email" data-cy="user-email">
        {email}
      </a>
    </div>
  );
};
