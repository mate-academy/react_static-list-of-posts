import React from 'react';
import { UserType } from '../../Types/UserType';

type Props = {
  user: UserType;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="list__user-info">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};
