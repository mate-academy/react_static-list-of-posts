import React from 'react';
import { Post } from '../Post/Post';
import { PostListShape } from '../shapes/PostListShape';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    <li className="post-list__item">
      {posts.map(post => (
        <Post key={post} {...post} />
      ))}
    </li>
  </ul>
);

PostList.propTypes = PostListShape;
