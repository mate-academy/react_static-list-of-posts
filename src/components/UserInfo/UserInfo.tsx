import React from 'react';
import { UserType } from '../../types/UserType';

type Props = {
  user: UserType;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
