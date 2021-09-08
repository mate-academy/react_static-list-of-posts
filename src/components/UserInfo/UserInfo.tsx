import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="user">
      <h1 className="user__name">
        User:
        {` ${name}`}
      </h1>
      <p className="user__description">
        {`Email: ${email}`}
      </p>
    </div>
  );
};
