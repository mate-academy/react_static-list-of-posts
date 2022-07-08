import React from 'react';
import { Post } from '../../Types/Post';

import './UserInfo.scss';

type Props = {
  user: Post;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3>{user.user?.name}</h3>
    <a href="mailto:{user.user.email}">{user.user.email}</a>
  </>
);

export default UserInfo;
