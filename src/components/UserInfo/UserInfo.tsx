import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <strong>{user?.name}</strong>
    <a href={`mailto:${user?.email}`}>{user?.email}</a>
  </div>
);
