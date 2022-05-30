import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div>
      {user.name}
    </div>

    <div>
      {user.email}
    </div>
  </>
);
