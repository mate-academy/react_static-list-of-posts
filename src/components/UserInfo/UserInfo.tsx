import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    user && (
      <div className="block">
        <p>
          Name:
          {' '}
          {user.name}
        </p>
        <p>
          Username:
          {' '}
          {user.username}
        </p>
        <p>
          Email:
          {' '}
          {user.email}
        </p>
      </div>
    )
  );
};
