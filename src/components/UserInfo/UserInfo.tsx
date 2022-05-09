import React from 'react';

import { User } from '../types';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="post__author" data-cy="name">
      {`Written by ${user.name}`}
    </p>
    <p className="post__author-email" data-cy="email">{user.email}</p>
  </>
);
