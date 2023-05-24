import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

interface UserInfoProps {
  user: User | null;
}

export const UserInfo: React.FC <UserInfoProps> = ({ user }) => {
  if (!user) {
    return null;
  }

  const { email, name } = user;

  return (
    <>
      Posted by
      {'  '}
      <a className="UserInfo" href={`mailto:${email}`}>{name}</a>
    </>
  );
};
