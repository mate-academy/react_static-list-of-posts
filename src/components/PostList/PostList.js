import React from 'react';
import { Post } from '../Post';
import { PostListType } from '../../types';

export const PostList = ({ posts }) => (
  <div className="container">
    {posts.map(item => <Post {...item} key={item.id} />)}
  </div>
);

PostList.propTypes = PostListType;
