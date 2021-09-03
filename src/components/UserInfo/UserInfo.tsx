import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="user-info">
      <p>
        User name:
        {' '}
        {user.name}
      </p>
      <p>
        Email:
        {' '}
        {user.email}
      </p>
    </div>
  );
};
