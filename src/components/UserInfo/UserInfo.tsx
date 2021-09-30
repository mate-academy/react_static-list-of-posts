import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;

  return (
    <p className="user__item">
      Author:
      <span className="list__author-name">
        {` ${user.name}`}
      </span>
    </p>
  );
};
