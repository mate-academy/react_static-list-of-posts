import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email, username } = user;

  return (
    <>
      <p className="list__name">
        <b>Author:</b>
        {` ${name} - ${username}`}
      </p>
      <p className="list__email">
        <b>Email:</b>
        {` ${email}`}
      </p>
    </>
  );
};
