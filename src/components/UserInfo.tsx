import React from 'react';
import { User } from '../Types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <>
      {`Author: ${name} - ${email}`}
    </>
  );
};
