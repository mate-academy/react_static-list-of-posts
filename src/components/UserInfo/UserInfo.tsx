import React from 'react';

type Props = {
  name:string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
