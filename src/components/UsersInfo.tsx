import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <div className="UserInfo">
    <h3 className="UserInfo-Name">
      {user.name}
    </h3>
    <div className="UserInfo-Email">
      {user.email}
    </div>
  </div>
);
