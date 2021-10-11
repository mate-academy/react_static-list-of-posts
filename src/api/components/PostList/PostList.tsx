import React from 'react';
import { Post } from '../../../types/Post';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

export const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id} className="PostList-Item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
