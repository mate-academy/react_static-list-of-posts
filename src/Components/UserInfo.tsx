import React from 'react';
import { User } from '../Types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="post_user user">
      <div className="user_name">
        {'Name: '}
        {user.name}
      </div>
      <div className="user_email">
        {'Email: '}
        {user.email}
      </div>
    </div>
  );
};
