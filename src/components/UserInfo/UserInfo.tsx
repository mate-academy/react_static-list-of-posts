import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="UserInfo">
    <hr />

    <h2 data-cy="user-name">{name}</h2>

    <a href={`mailto: ${email}`} data-cy="user-email">{email}</a>
  </div>
);
