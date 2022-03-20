import React from 'react';
import { User } from '../types/User';

type Props = User;

export const UserInfo: React.FC<Props> = ({
  name, email,
}) => {
  return (
    <div className="user">
      <div className="user__photo" />
      <div className="user__info">
        <h5>{name}</h5>
        <h4>{email}</h4>
      </div>
    </div>
  );
};
