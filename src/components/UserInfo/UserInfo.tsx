import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({
  name,
  email,
}) => (
  <div className="user">
    <div className="user__name" data-cy="name">{name}</div>
    <div className="user__email" data-cy="email">{email}</div>
  </div>
);
