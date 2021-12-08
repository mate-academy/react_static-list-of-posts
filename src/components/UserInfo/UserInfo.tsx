import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = Omit<User, 'id'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <>
      <div className="user">
        <h4 className="user__name">{name}</h4>
        <p className="user__email">{email}</p>
      </div>
    </>
  );
};
