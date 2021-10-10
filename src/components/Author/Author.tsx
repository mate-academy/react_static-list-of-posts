import React from 'react';
import { User } from '../../types';

type PropsS = {
  data: User | null;
};
export const Author: React.FC<PropsS> = ({ data: user }) => (
  <div className="user">
    <h4 className="user__name">
      {'Author: '}
      {user ? user.name : 'unknown'}
      {' - '}
      <span>{user?.email}</span>
    </h4>
  </div>
);
