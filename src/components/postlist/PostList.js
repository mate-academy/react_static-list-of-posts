import React from 'react';
import './PostList.scss';
import { Post } from '../post';
import { PostListShape } from '../shapes/PostListShape';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = PostListShape;
