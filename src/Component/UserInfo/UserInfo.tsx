import React from 'react';
import { User } from '../../Types';
import './Style.css';

type Props = {
  user: User,
};
export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="user-info">{user.name}</div>
      <div className="user-info">{user.email}</div>
    </>
  );
};
