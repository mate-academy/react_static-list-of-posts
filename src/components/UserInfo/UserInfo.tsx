import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = props => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="user">
      Author:
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};
