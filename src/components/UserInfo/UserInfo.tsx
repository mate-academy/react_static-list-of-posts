import React from 'react';

import { UserType } from '../../types/UserType';
import './UserInfo.scss';

type Props = {
  user: UserType;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    email,
    name,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
