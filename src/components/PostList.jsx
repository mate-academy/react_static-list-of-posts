import React from 'react';
import { Post } from './Post'

export const PostList = ({ whole }) => (
  <ul className="ul">
    {whole.map(post => (
      <li key={post.id} className="li">
        <Post {...post} />
      </li>
    ))}
  </ul>
);
