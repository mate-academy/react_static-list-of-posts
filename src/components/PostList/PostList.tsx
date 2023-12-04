import React from 'react';
import { Post } from '../../types';
import { PostInfo } from '../PostInfo';

type Posts = {
  posts: Post[];
};

export const PostList: React.FC<Posts> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
