import React from 'react';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <span>{user.name}</span>
    <span>{user.email}</span>
  </div>

);
