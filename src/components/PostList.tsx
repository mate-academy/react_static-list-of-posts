import React from 'react';
import { Post } from '../types/Post';
import { PostInfo } from './PostInfo';

export const PostList: React.FC<{ prepared: Post[] }> = ({ prepared }) => (
  <ul>
    {prepared.map(post => (
      <PostInfo post={post} />
    ))}
  </ul>
);
