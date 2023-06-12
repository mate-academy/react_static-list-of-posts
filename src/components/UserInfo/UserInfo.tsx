import React from 'react';
import { Users } from '../../types/Users';

export const UserInfo: React.FC<Users> = ({ name, email }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
