import React from 'react';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList:React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <PostInfo post={post} />

    ))}
  </ul>
);
