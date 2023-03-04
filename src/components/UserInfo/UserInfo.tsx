import React from 'react';
import { User } from '../../types/User';

type UserProps = {
  user: User;
};

export const UserInfo: React.FC<UserProps> = ({
  user: { name, email},
}) => {

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
