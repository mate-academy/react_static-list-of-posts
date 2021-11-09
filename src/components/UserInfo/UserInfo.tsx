import React from 'react';
import { User } from '../../type/type';
import './UserInfo.scss';

interface Props {
  userInfo: User;
}

export const UserInfo: React.FC<Props> = ({ userInfo }) => {
  const { name, email } = userInfo;

  return (
    <div className="user-info">
      <span>{name}</span>
      <br />
      <span>{email}</span>
    </div>
  );
};
