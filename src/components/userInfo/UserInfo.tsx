import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="user">
      <div className="user__name">
        Author:
        {' '}
        {name}
      </div>
      <div className="user__email">
        {email}
      </div>
    </div>
  );
};
