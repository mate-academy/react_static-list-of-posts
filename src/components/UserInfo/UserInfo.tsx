import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <>
      <p className="User__name">
        <strong>Author: </strong>
        {name}
      </p>
      <p className="User__email">
        <strong>Email: </strong>
        {email}
      </p>
    </>
  );
};
