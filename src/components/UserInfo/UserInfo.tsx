import React from 'react';

import { User } from '../../types/Users';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <a className="UserInfo" key={user.id} href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
