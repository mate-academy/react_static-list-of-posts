import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../../type';
import './PostList.scss';

export const PostList: React.FC<{ list: Post[] }> = ({ list }) => (
  <div className="postList">
    {list.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
