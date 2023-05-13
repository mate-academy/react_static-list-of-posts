import React from 'react';

interface Props {
  name: string | undefined,
  email: string | undefined,
  id: number,
}

export const UserInfo: React.FC<Props> = ({
  name,
  email,
  id,
}) => (
  <a key={id} className="UserInfo" href={email}>
    {name}
  </a>
);
