import React from 'react';
import { User } from '../../types/typedefs';

import './UserInfo.scss';

type Props = {
  userInfo: User,
};

export const UserInfo:React.FC<Props> = (props) => {
  const { name, email } = props.userInfo;

  return (
    <h4 className="userInfo">
      {`${name}, ${email}`}
    </h4>
  );
};
