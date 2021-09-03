import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div>
      {user.username}
    </div>
  );
};
