import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  users: User[];
};

export const UserInfo: React.FC<Props> = ({ users }) => {
  return (
    <div className="UserInfo">
      {users.map(user => (
        <a key={user.id} href={`mailto:${user.email}`}>
          {user.name}
        </a>
      ))}
    </div>
  );
};
