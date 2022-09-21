import React from 'react';

import { User } from '../../types/User';

export const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
}) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name || username}
    </a>
  </p>
);
