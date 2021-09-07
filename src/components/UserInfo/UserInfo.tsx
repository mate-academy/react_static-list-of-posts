import React from 'react';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email, username } = user;

  return (
    <>
      <p className="list__name">{`Author ${name} - ${username}`}</p>
      <p className="list__email">{`Email: ${email}`}</p>
    </>
  );
};
