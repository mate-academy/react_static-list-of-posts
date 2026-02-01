import React from 'react';
import { UsersType } from '../../types/UsersType';

type Props = {
  user: UsersType | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <p>
      {' Posted by  '}

      {user !== null && (
        <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
          {user.name}
        </a>
      )}
    </p>
  );
};
