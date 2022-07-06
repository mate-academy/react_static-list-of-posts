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
  <div className="posts__author">
    <span data-cy="user-name">{name}</span>
    <span data-cy="user-email">{` | ${email}`}</span>
  </div>
);
