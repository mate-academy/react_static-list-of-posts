import React from 'react';

import './UserInfo.scss';

import User from '../types/User';

type Props = {
  user: User,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <span className="post__author">
    Who published:
    {` ${user.name}@${user.username}`}
  </span>
);

export default UserInfo;
