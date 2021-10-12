import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <div className="User">
      <p className="User__name">
        <strong>Author: </strong>
        {name}
      </p>
      <p className="User__email">
        <strong>Email: </strong>
        {email}
      </p>
    </div>
  );
};
