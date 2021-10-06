import React from 'react';

import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    username,
    email,
  } = user;

  return (
    <h4>
      {`Author: ${name}(${username})`}
      <br />
      {`Email: ${email}`}
    </h4>
  );
};
