import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 className="posts__username">
      {user.name}
    </h3>

    <span className="posts__email">
      {user.email}
    </span>
  </>
);
