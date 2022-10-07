import React from 'react';

import { UserInfoProps } from '../../types';

import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoProps> = props => {
  const { name, email } = props.user || {};

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
