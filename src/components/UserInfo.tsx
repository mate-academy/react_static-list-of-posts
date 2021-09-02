import React from 'react';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <>
      <p>
        {'Author: '}
        {user && user.name}
        <br />
        {'Email: '}
        {user && user.email}
      </p>
    </>
  );
};
