import React from 'react';

import './UserInfo.scss';
import { UserTypes } from '../../types/UserTypes';

type Props = {
  user: UserTypes
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="post__user">
    <strong className="post__user-name">{`Author: ${user.name}`}</strong>
    <span className="post__user-email">
      (
      {user.email}
      )
    </span>
  </div>
);
