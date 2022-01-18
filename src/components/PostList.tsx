import React from 'react';

import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="app">
    {posts.map(post => (
      <PostInfo key={post.id} {...post} />
    ))}
  </div>
);
