import React from 'react';
import { UserType } from '../../types/UserType';

type UserInfoProps = {
  user: UserType
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
