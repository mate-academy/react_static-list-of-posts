import React from 'react';
import Post from './Post/Post';

const PostList = ({ post }) => (
  post.map(item => <Post key={item.id} {...item} />)
);

export default PostList;
