import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <h5>
        {'Post by '}
        <span className="post__author">{name}</span>
      </h5>
      <a className="post__link" href={`mailto:${email}`}>{email}</a>
    </>
  );
};
