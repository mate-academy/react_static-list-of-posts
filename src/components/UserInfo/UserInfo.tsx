import React from 'react';

import { UserTypes } from '../../types';

import './UserInfo.scss';

type Props = {
  user: UserTypes
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return <a href={`mailto:${email}`} className="UserInfo">{`${name}`}</a>;
};
