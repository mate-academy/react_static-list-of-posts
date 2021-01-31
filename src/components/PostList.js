import React from 'react';
import posts from '../api/posts';
import { Post } from './Post';

export const PostList = () => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);
