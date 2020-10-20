import React from 'react';
import { PostListShape } from '../../shapes';
import { Post } from '../Post';
import './PostList.css';

export const PostList = ({ posts }) => (
  <div className="App__postlist">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = PostListShape;
