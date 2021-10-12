import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostProps';

type PostListProps = {
  posts: Post[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div>
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
