import React from 'react';
import { User } from '../types/User';
import './ComponentsStyles.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = props => {
  const { user } = props;
  const { name, email } = user;

  return (
    <div>
      <div>{`Name: ${name}`}</div>
      <div>{`Email: ${email}`}</div>
    </div>
  );
};
