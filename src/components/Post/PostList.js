import React from 'react';
import Post from './Post';

const PostList = ({ post }) => (
  post.map(item => <Post key={item.id} {...item} />)
);

export default PostList;
