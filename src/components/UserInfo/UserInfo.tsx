import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <div className="UserInfo__name">{user.name}</div>
    <div className="UserInfo__email">{user.email}</div>
  </div>
);
