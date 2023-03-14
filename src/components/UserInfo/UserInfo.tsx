import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  author: User;
};

export const UserInfo: React.FC<Props> = ({ author }) => {
  const {
    email,
    name,
  } = author;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
