import React from 'react';
import { Users } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: Users;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h4 data-cy="name">{`Name: ${user.name}`}</h4>
    <a
      href={`mailto: ${user.email}`}
      data-cy="email"
      className="UserInfo__link"
    >
      {`Email: ${user.email}`}
    </a>
  </>
);
