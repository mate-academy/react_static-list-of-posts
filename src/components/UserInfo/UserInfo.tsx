import React from 'react';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({
  name,
  email,
}) => (
  <>
    <b>
      {'User Name: '}
    </b>
    {name}
    <br />
    <b>
      {'Email: '}
    </b>
    {email}
  </>
);
