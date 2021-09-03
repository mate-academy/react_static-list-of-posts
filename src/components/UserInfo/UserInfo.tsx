import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  const { name, email } = user;

  return (
    <div className="user-info">
      <div className="user-info__wrapper">
        <p className="user-info__title">
          {name}
        </p>

        <p>
          {email}
        </p>
      </div>
    </div>
  );
};
