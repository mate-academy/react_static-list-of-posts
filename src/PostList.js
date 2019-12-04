import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => (
  posts.map(post => (
    <Post post={post} />
  ))
);

export default PostList;
