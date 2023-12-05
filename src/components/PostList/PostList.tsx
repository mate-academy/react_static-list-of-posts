import React from 'react';
import { PostListProps } from '../../types';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
