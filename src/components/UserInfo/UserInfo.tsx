import { FC } from 'react';

import { UserProps } from '../../types';

export const UserInfo: FC<UserProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
