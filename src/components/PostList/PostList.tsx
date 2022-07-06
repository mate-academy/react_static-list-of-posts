import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import { Post } from '../Types/Post';
import './PostList.scss';

export const PostList: React.FC<{ list: Post[] }> = ({ list }) => (
  <div className="postList">
    {list.map(post => (
      <div key={post.id}><PostInfo post={post} /></div>
    ))}
  </div>
);
