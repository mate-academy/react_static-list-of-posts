import React from 'react';
import Post from './Post';

const PostList = ({ post }) => (
  post.map(item => (
    <Post post={item} key={item.id} />
  ))
);

export default PostList;
