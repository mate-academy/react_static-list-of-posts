import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    <span className="nameOfUser" data-cy="name">
      {` ${name}`}
    </span>
    <span> *** </span>
    <span className="userEmail" data-cy="email">
      {email}
    </span>
  </>
);

export default UserInfo;
