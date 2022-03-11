import React from 'react';
import { IUser } from '../../types/User';
import './UserInfo.scss';

type UserInfoProps = {
  user: IUser,
  addClassName?: string,
};

export const UserInfo: React.FC<UserInfoProps> = ({ user, addClassName }) => (
  <div className={`UserInfo ${addClassName}`}>
    <strong className="UserInfo__name">{user.name}</strong>
    {' '}
    <span className="UserInfo__email">
      {'( '}
      {user.email}
      {' )'}
    </span>
  </div>
);

UserInfo.defaultProps = {
  addClassName: '',
};
