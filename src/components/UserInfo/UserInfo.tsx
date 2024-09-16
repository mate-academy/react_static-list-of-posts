import React from 'react';
import { User } from '../../Types/User';

interface UserInfoProps {
  user: User | undefined;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  if (!user) {
    return null;
  }

  const { name, email } = user;

  return (
    <>
      {user && (
        <a className="UserInfo" href={`mailto:${email}`}>
          {name}
        </a>
      )}
    </>
  );
};
