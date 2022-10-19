import React from 'react';

export type UserItem = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<UserItem> = ({ name, email }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
