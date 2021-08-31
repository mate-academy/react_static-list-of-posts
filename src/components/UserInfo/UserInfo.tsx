import React from 'react';

import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user">
      <p className="user__name">
        <strong>
          Name:
        </strong>
        {` ${name}`}
      </p>

      <p className="user__email">
        <strong>
          Email:
        </strong>
        {` ${email}`}
      </p>
    </div>
  );
};
