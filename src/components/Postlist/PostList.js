import React from 'react';
import { Post } from '../Post/Post';

export const PostList = ({ postsInformation }) => (
  postsInformation.map(post => (
    <Post post={post} key={post.id} />
  ))
);
