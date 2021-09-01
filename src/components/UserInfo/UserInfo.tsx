import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div className="UserInfo">
      <p>{name}</p>
      <a className="UserInfo__email" href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
