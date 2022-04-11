import React from 'react';
import { FullPost } from '../types.ts/FullPost';
import { CommentList } from './CommentList';

export const UserInfo: React.FC<FullPost> = (post) => (
  <div>
    <strong> User name: </strong>
    {post.user?.name}
    <strong> User email: </strong>
    {post.user?.email}

    <CommentList {...post} />
  </div>
);
