import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostArr } from '../../type/post';
import './PostList.scss';

export const PostList: React.FC<PostArr> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
