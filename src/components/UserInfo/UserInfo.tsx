import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type UserInfoProps = {
  user: User,
  addClassName?: string,
};

export const UserInfo: React.FC<UserInfoProps> = ({ user, addClassName }) => (
  <div className={`userInfo ${addClassName}`}>
    <strong className="userInfo__name">{user.name}</strong>
    {' '}
    <span className="userInfo__email">
      {'( '}
      {user.email}
      {' )'}
    </span>
  </div>
);

UserInfo.defaultProps = {
  addClassName: '',
};
