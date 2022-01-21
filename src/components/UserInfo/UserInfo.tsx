import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="user-info">{`user: ${user.name} | email: ${user.email}`}</p>
);
