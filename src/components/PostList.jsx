import React from 'react';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  posts.map(post => <Post {...post} />)
);
