import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Props = {
  arrayPosts: Post[];
};

export const PostList:React.FC<Props> = ({ arrayPosts }) => (
  <ol>
    {arrayPosts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ol>
);
