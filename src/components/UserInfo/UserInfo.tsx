import React from 'react';

type Props = {
  name: string | undefined,
  email: string | undefined,
};

export const UserInfo: React.FC<Props> = ({
  name,
  email,
}) => (
  <>
    <span>
      Owner:
      {name}
      {' '}
      Email:
      {email}
    </span>
  </>
);
