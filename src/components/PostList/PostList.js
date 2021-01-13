import React from 'react';
import './PostList.scss';
import { Post } from '../Post';
import { TypePostList } from '../../types';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => <Post key={post.id} {...post} />)}
  </div>
);

PostList.propTypes = TypePostList;
