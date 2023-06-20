import React from 'react';
import { User } from '../../types/types';

interface Props {
  user: User;
}
export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
