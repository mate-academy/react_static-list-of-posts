import React from 'react';

import './UserInfo.scss';

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
    <div data-cy="email">
      <a
        href={`malito:${email}`}
        className="user__email-link"
      >
        {email}
      </a>
    </div>
  </div>
);
