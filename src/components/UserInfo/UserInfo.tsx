import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: React.FC <Props> = ({ name, email }) => {
  const mail = `mailto:${email}`;

  return (
    <a className="UserInfo" href={mail}>
      {name}
    </a>
  );
};
