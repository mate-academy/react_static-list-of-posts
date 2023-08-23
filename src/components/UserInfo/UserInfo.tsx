import React from 'react';
import { User } from '../../types/User';

type UserProps = {
  user: User | null
};

export const UserInfo: React.FC<UserProps> = ({ user }) => {
  return (
    user && (
      <p>
        {'Posted by  '}
        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      </p>
    )
  );
};
