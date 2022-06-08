import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <>
      <div className="user">
        <h3 className="user_name" data-cy="user-name">{name}</h3>
        <div className="user_email" data-cy="user-email">{email}</div>
      </div>
    </>
  );
};
