import React from 'react';

import { User } from '../../types/User';

import './UserInfo.scss';

type Props = Omit<User, 'id'>;

export const UserInfo:React.FC<Props> = ({ name, email }) => {
  return (
    <div className="post__author author">
      <h4 className="author__name">{name}</h4>
      <p className="author__email">{email}</p>
    </div>
  );
};
