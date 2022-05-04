import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <>
      <p className="user__name" data-cy="name">
        {name}
      </p>

      <a href={`mailto:${email}`} className="user__email" data-cy="email">
        {email}
      </a>
    </>
  );
};
