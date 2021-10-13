import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User[];
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="post__user user">
    <div className="user__name">
      <strong>Name: </strong>
      {user[0].name}
    </div>
    <div className="user__email">
      <strong>E-mail: </strong>
      {user[0].email}
    </div>
  </div>
);
