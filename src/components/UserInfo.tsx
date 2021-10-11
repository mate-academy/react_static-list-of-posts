import React from 'react';
import { User } from '../App';

export const UserInfo: React.FC<{ user: User; }> = ({ user }) => (
  <div className="post__user-info">
    <div>
      <strong>{'Name: '}</strong>
      {user.name}
    </div>
    <div>
      <strong>{'Email: '}</strong>
      {user.email}
    </div>
  </div>
);
