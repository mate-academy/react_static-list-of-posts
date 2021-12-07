import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <>
      <div className="posts__author-name">
        <i>{name}</i>
      </div>
      <div className="posts__author-email">
        <span>{email}</span>
      </div>
    </>
  );
};
