import React from 'react';

type Props = {
  name: string;
  email: string;
};

export const UserInfo:React.FC<Props> = ({
  name,
  email,
}) => (
  <div>
    <div data-cy="name">{name}</div>
    <div data-cy="email">{email}</div>
  </div>
);
