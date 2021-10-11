import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="user">
      <p className="user__name">
        {`By: ${name}`}
      </p>
      <p className="user__email">
        {email}
      </p>
    </div>
  );
};
