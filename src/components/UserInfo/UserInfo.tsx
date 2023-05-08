import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

interface Props {
  user: User;
}
export const UserInfo: React.FC<Props> = ({ user }) => {
  const { email, name } = user;

  return (
    <p>
      {`Posted by ${name}`}
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
