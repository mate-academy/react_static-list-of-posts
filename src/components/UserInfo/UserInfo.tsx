import { FC } from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: FC<Props> = ({ user: { email, name } }) => {
  const emailString = `mailto:${email}`;

  return (
    <a className="UserInfo" href={emailString}>
      {name}
    </a>
  );
};
