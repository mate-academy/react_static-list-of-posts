import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../types/Post';

export const PostList: React.FC<{ poosts: Post[]; }> = ({ poosts }) => (
  <ul className="App__list">
    {poosts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
