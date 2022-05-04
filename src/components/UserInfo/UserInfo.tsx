import React from 'react';
import { User } from '../../types/Types';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <div className="userinfo">
      <p data-cy="name" className="userinfo__name">
        {name}
      </p>

      <a
        data-cy="email"
        className="userinfo__mail"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>
  );
};
