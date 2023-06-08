import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
  username: string,
};

export const UserInfo: React.FC<Props> = ({
  username,
  email,
  name,
}) => (
  <p>
    {`Posted by ${username} `}

    <a className="UserInfo" href={`mailto: ${email}`}>
      {name}
    </a>
  </p>
);
