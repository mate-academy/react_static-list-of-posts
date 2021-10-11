import React from 'react';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="container">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
