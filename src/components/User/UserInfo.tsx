import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="post__user">
      <p className="post__user-name">
        {name}
      </p>
      <p className="post__user-email">
        {email}
      </p>
    </div>
  );
};
