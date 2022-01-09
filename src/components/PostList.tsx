import React from 'react';
import { PostInfo } from './PostInfo';

import { Post } from '../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
