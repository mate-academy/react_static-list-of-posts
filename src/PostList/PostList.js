import React from 'react';
import './PostList.css';
import { Post } from '../Post/Post';

const PostList = ({ preparedPosts }) => (
  preparedPosts.map(item => (
    <Post post={item} key={item.id} />
  ))
);

export { PostList };
