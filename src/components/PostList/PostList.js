import React from 'react';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (

  posts.map(post => (
    <li key={post.id} className="post">
      <Post article={post} />
    </li>
  ))
);
