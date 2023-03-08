import React from 'react';
import { User } from '../../types/user';
import './UserInfo.scss';

type Author = {
  user: User | null;
};

export const UserInfo: React.FC<Author> = ({ user }) => {
  return (user)
    ? (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
    : (
      <p className="UserInfo">
        User not found
      </p>
    );
};
