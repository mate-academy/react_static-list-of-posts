import React from 'react';

export type UserInfoProps = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
