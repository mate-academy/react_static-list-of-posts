import React from 'react';
import './UserInfo.scss';

import { User } from '../../Types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="user__info">
      {'From '}
      {user.name}
      <br />
      {'email '}
      {user.email}
    </div>
  </>
);
