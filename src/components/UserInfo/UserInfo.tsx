import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <h3 className="fullPost__name">{user.name}</h3>
      <a href="email.com" className="fullPost__email">{user.email}</a>
    </>
  );
};
