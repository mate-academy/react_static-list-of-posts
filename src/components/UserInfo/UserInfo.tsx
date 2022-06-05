import React from 'react';
import { UserFromServer } from '../../react-app-env';
import './UserInfo.scss';

type Props = {
  mainUser: UserFromServer;
};

export const UserInfo: React.FC<Props> = ({ mainUser }) => {
  const {
    name,
    email,
  } = mainUser;

  return (
    <>
      <h5 className="userInfoName" data-cy="user-name">
        {`User Name: ${name}`}
      </h5>

      <a
        className="userInfoEmail"
        data-cy="user-email"
        href={`mailto:${email}`}
      >
        {`Email: ${email}`}
      </a>
    </>
  );
};
