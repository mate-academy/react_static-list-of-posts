import React from 'react';
import { Post } from '../Post/Post';
import { PostListShape } from '../shapes/PostListShape';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <Post key={post} {...post} />
    ))}
  </ul>
);

PostList.propTypes = PostListShape;
