import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div data-cy="user-name">
      {user.name}
    </div>

    <div data-cy="user-email">
      {user.email}
    </div>
  </>
);
