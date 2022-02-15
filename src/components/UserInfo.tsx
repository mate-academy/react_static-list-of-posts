import React from 'react';
import { User } from './interface';

type Information = {
  // eslint-disable-next-line react/require-default-props
  info?: User;
};

export const UserInfo: React.FC<Information> = ({ info }) => {
  return (
    <div className="userInfo">
      <p>{info && info.name}</p>
      <a href={info && info.email}>{info && info.email}</a>
    </div>
  );
};
