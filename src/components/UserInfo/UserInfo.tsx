import React from 'react';

import './UserInfo.scss';

import { Users } from '../../types/Users';

type Props = {
  user: Users | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user || {};

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
