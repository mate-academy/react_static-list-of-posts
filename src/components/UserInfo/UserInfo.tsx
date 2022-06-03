import React from 'react';

import './UserInfo.scss';
import { User } from '../../react-app-env';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="user-info">
    <li className="user-info__name" data-cy="user-name">
      {`Name: ${user.name}`}
    </li>
    <li className="user-info__email" data-cy="user-email">
      {`Email: ${user.email}`}
    </li>
  </ul>
);
