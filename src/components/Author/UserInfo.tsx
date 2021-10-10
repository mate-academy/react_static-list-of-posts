import React from 'react';
import { User } from '../../types';

type Props = {
  data: User | null;
};
export const UserInfo: React.FC<Props> = ({ data: user }) => (
  <div className="user">
    <h4 className="user__name">
      {'UserInfo: '}
      {user ? user.name : 'unknown'}
      {' - '}
      <span>{user?.email}</span>
    </h4>
  </div>
);
