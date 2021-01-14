import React from 'react';
import { Post } from '../Post';
import './PostList.scss';
import { PostListShape } from '../Shapes/PostListShape';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {posts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = PostListShape;
