import React from 'react';
import { Post } from './Post';
import { PostShape } from '../shapes/PostShape';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <Post {...post} key={post.id} />
  ))
);

PostList.propTypes = PostShape;
