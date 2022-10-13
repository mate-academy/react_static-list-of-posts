import React from 'react';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/Post';

export const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
