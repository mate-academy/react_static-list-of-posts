import React from 'react';
import './PostList.scss';

import { Post } from '../Post';
import { PostListShape } from '../shapes/PostListShape';

export const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListShape;
