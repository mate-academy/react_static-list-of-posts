import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="userInfo">
    <h4 data-cy="name">{name}</h4>
    <h4 className="userInfo__email" data-cy="email">{email}</h4>
  </div>
);
