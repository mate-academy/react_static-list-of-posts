import React from 'react';
import { User } from '../../types/User/User';

import './UserInfo.scss';

interface Props {
  userItem: User;
}

export const UserInfo: React.FC<Props> = (props) => {
  const { userItem } = props;
  const { name, email } = userItem;

  return (
    <div className="user">
      Author:
      <div className="user__name">{name}</div>
      <div className="user__email">{email}</div>
    </div>
  );
};
