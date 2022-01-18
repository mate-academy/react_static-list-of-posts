import React from 'react';
import './User.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="User">
    <p className="User__name">{user.name}</p>
    <p className="User__email">{user.email}</p>
  </div>
);
