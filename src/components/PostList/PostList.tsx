import React from 'react';
import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';
import { PostListProps } from '../../types/PostListProps';

export const PostList: React.FC<PostListProps> = ({ posts = [] }) => (
  <ul className="post-list">
    {posts.map(post => (
      <li key={post.id} className="post-list__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
