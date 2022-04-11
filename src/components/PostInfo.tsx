import React from 'react';
import { FullPost } from '../types.ts/FullPost';
import { UserInfo } from './UserInfo';

export const PostInfo: React.FC<FullPost> = (post) => (
  <div>
    <strong> Post title: </strong>
    {post.title}
    <strong> Post body: </strong>
    {post.body}

    <UserInfo {...post} />
  </div>

);
