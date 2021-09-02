import React from 'react';
import { User } from '../../type/User';

type Props = {
  userInfo: User,
};

export const UserInfo: React.FC<Props> = (props) => {
  const { userInfo } = props;

  return (
    <>
      <h3>
        User:
        {' '}
        {userInfo.name}
      </h3>
      {' '}
      Email:
      {' '}
      {userInfo.email}
    </>
  );
};
