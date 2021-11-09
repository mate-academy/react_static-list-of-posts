import React from 'react';
import { User } from '../../typedefs';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="posts__author">
      <h3 className="posts__author-name">{name}</h3>
      <a className="posts__author-email" href={`mailto:${email}`}>
        {email}
      </a>
    </div>
  );
};
