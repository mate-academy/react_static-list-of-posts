import React from 'react';
import { Post } from './Post';
import { PostListType } from '../types';

export const PostList = ({ list }) => (
  <div className="App__posts">
    {list.map(post => <Post key={post.id} {...post} />)}
  </div>
);

PostList.propTypes = PostListType;
