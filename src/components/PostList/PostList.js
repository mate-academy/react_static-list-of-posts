import React from 'react';
import { PostListShape } from '../shapes/PostListShape';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListShape;
