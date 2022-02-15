import React from 'react';
import './UserInfo.scss';

type Props = {
  name:string;
  email:string;
};

export const UserInfo:React.FC<Props> = ({ name, email }) => (
  <div className="posts__user-info user-info">
    <p className="user-info__name">{name}</p>
    <p className="user-info__email">{email}</p>
  </div>
);
