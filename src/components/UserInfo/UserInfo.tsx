import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <div className="h4">
      {`Posted by: ${user.name}`}
    </div>
  );
};
