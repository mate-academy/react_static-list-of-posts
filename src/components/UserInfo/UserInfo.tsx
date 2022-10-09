import React from 'react';

import { UserInfoProps } from '../../types';

import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { name, email } = user;

  return <a href={`mailto:${email}`} className="UserInfo">{name}</a>;
};
