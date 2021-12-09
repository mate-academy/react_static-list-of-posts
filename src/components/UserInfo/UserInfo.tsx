import React from 'react';
import { User } from '../../typedefs/User';
import '../PostList/PostList.scss';

interface Props {
  userInfo: Pick<User, 'email' | 'name'> | undefined,
}

export const UserInfo: React.FC<Props> = ({ userInfo }) => (
  <p className="post-list__list-item-user-info">
    <span className="post-list__list-item-name">
      {userInfo?.name}
    </span>
    {' | '}
    <a
      href={`mailto: ${userInfo?.email}`}
      className="post-list__list-item-email"
    >
      {userInfo?.email}
    </a>
  </p>
);
