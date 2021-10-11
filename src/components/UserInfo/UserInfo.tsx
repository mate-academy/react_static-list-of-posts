import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="post__user-info">
    Published by&nbsp;
    <strong>
      {user.name}
    </strong>
    &nbsp;(Email:
    <strong>
      {user.email}
    </strong>
    )
  </p>
);
