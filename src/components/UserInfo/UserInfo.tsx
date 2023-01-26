import React from 'react';

type UserInfoProps = {
  name: string;
  email: string;
};

export const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
