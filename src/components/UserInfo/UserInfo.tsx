import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="user">
    <span data-cy="user-name">
      {'Name: '}
      {name}
    </span>
    <br />
    <span data-cy="user-email">
      {'Email: '}
      {email}
    </span>
  </div>
);
