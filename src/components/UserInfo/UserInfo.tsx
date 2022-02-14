import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user
    ? (
      <p className="post__user">
        {user.name}
        <p>
          email:
          {' '}
          {user.email}
        </p>
      </p>
    )
    : (
      <div>
        no User;
      </div>
    );
};
