import React from 'react';

import './UserInfo.scss';
import { Comment } from '../../type';

export const UserInfo: React.FC <Comment> = (
  user,
) => (
  <>
    <p>{`User's name is ${user.name}`}</p>
    <p>{`User's email is ${user.email}`}</p>
  </>
);
