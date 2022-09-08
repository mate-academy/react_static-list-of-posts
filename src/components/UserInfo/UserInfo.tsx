import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/user';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <>
    <p className="PostedBy">
      {' Posted by  '}
    </p>
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </>
);
