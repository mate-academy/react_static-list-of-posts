import React from 'react';
import { Post } from '../Post/Post';

export const PostList = ({ readyPosts }) => (
  readyPosts.map(item => (
    <Post post={item} key={item.id} />
  ))
);
