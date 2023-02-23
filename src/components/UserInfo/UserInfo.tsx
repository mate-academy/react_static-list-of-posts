import React from 'react';
import { UserTypes } from '../../types/userTypes';

type Props = {
  user: UserTypes | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </>
  );
};
