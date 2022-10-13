import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const {
    name,
    email,
  } = user;

  return (
    <div>
      {'Posted by '}
      <a className="UserInfo" href={`mailto:${email}`}>{name}</a>
    </div>
  );
};
