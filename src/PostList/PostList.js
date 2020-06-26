import React from 'react';
import { Post } from '../Post/Post';

const PostList = ({ readyPosts }) => (
  readyPosts.map(item => (
    <Post post={item} key={item.id} />
  ))
);

export { PostList };
