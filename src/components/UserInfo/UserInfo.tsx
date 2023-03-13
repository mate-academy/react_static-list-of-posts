import React from 'react';
import { User } from '../../types/Users';

type Props = {
  users: User;
};

export const UserInfo: React.FC<Props> = ({ users }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${users.email}`}>
      {users.name}
    </a>
  </p>
);
