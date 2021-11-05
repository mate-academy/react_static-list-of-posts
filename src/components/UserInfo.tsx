import React from 'react';

import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="User-info">
      <p className="User-info__author">
        Published by:
        <span className="User-info__name">{` ${name}`}</span>
      </p>
      <p className="User-info__email">
        {` Email: ${email} `}
      </p>
    </div>
  );
};
