import React from 'react';

import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
}) => (
  <h4>
    {`Author: ${name}(${username})`}
    <br />
    {`Email: ${email}`}
  </h4>
);
