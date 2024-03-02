import React from 'react';
import { User } from '../../types/user';

export const UserInfo: React.FC<Props> = ({ user }: Props) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`} key={user.id}>
      {user.name}
    </a>
  );
};

type Props = {
  user: User;
};
