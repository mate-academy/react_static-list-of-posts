import React from 'react';
import { User } from '../../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<{ user: User }> = ({ user }) => (
  <div className="UserInfo">
    <img
      className="UserInfo-Foto"
      src="https://cdn3.iconfinder.com/data/icons/user-icon-4-1/100/user_2-07-512.png"
      alt="User foto"
    />
    <h3 className="UserInfo-Nickname">{user.username}</h3>
    <p className="UserInfo-Name">{`(${user.name})`}</p>
    <a className="UserInfo-Email" href={`mailto:${user.email.toLocaleLowerCase()}`}>send e-mail to User</a>
  </div>
);
