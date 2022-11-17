import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;
  const hrefMail = `mailto:${email}`;

  return (
    <p>
      {'Posted by  '}

      <a className="UserInfo" href={hrefMail}>
        {name}
      </a>
    </p>
  );
};
