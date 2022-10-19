import React from 'react';
import { User } from '../../types/User';

interface Prop {
  user: User | null;
}

export const UserInfo: React.FC<Prop> = ({ user }) => {
  const {
    email,
    name,
  } = user || {};

  return (
    <>
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </>
  );
};
