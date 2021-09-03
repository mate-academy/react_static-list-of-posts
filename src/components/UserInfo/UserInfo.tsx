import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <>
      <p className="user__name">
        {name}
      </p>
      <p className="user__email">
        {email}
      </p>
    </>
  );
};
