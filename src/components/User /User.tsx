import React from 'react';
import { User } from '../../types';
import './User.scss';

type Props = Omit<User, 'id'>;

export const UserInfo:React.FC<Props> = ({ name, email }) => {
  return (
    <div className="post__user user">
      <h4 className="user__name">{name}</h4>
      <p className="user__email">{email}</p>
    </div>
  );
};
