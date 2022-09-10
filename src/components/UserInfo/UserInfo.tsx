import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/userType';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => user && (
  <>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);
