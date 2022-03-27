import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <strong data-cy="name">{name}</strong>
    <br />
    <span data-cy="email">{email}</span>
    <p />
  </>
);
