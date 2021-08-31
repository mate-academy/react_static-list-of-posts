import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <p className="user">{`User: ${name} - ${email}`}</p>
  );
};
