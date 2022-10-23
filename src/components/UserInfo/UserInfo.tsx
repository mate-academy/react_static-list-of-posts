import React from 'react';

export type UserInfoProps = {
  user: User
};

export interface User {
  name: string,
  email: string,
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
