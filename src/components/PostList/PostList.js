import React from 'react';
import { Post } from '../Post';
import { PostListType } from '../../types';

export const PostList = ({ post }) => (
  <div className="container">
    {post.map(item => <Post {...item} key={item.id} />)}
  </div>
);

PostList.propTypes = PostListType;
