import React from 'react';
import { UserInfoProps } from '../../types/UserInfoProps';

import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <div className="user">
    <p className="user__name" data-cy="user-name">
      {`Author: ${user.name}`}
    </p>
    <p className="user__email" data-cy="user-email">
      {(user.email)}
    </p>
  </div>
);
