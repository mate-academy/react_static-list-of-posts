import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <>
    <div className="post__name">
      {user?.name}
    </div>
    <div className="post__email">
      {user?.email}
    </div>
  </>
);
