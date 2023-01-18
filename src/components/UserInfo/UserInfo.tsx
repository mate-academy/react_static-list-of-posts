import React from 'react';

import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  currentUser: User
};

export const UserInfo: React.FC<Props> = ({ currentUser }) => {
  const { name, email } = currentUser;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
