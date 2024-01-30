import React from 'react';
import { User } from '../../types/users';

interface UserInfoProps {
  user: User | undefined;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <p>
    {`Posted by ${user?.email}`}
    <a className="UserInfo" href={`mailto:${user?.email}`}>
     {user?.name}
    </a>
  </p>
);

