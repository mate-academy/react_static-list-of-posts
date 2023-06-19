// Libraries
import React from 'react';

// Styles
import './UserInfo.scss';

type Props = {
  userName: string | undefined;
  userEmail: string | undefined;
};

export const UserInfo: React.FC<Props> = ({ userName, userEmail }) => (
  <p>
    {'Posted by '}

    <a className="UserInfo" href={`mailto:${userEmail}`}>
      {userName}
    </a>
  </p>
);
