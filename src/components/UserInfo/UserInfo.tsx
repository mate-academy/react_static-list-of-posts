import React from 'react';
import { User } from '../../types/User';

interface Props {
  userItem: User;
}

export const UserInfo: React.FC<Props> = (props) => {
  const { userItem } = props;
  const { name, email } = userItem;

  return (
    <div className="user">
      Author:
      <div>{name}</div>
      <div>{email}</div>
    </div>
  );
};
