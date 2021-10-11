import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="user">
      <h4>{name}</h4>
      <h4>{email}</h4>
    </div>
  );
};
