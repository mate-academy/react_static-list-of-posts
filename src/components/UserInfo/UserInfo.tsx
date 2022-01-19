import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
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
);
