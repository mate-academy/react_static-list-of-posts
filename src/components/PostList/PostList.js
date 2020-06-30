import React from 'react';
import { PostListShape } from '../Shapes';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  posts.map(item => (
    <Post {...item} key={item.id} />
  ))
);

PostList.propTypes = PostListShape.isRequired;
