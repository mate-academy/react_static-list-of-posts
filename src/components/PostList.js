import React from 'react';
import Post from './Post';

const PostList = ({ search }) => (
  search.map(item => (
    <Post item={item} key={item.id} />
  ))
);

export default PostList;
