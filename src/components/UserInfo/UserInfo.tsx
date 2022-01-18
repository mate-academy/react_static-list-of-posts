import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="name">{user.name}</p>
    <p className="email">{user.email}</p>
  </>
);
