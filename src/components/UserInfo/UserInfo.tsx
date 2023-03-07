import React from 'react';
import { User } from '../../Types/Types';

export const UserInfo: React.FC<Pick<User, 'name' | 'email'>> = ({
  name,
  email,
}) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
