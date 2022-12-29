import React from 'react';
import { User } from '../../types/user';

type Props = {
  userInfo: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const {
    userInfo,
  } = props;

  const { email, name } = userInfo;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
