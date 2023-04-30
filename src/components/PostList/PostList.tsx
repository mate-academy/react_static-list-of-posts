import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostListProps } from '../../type/post';
import './PostList.scss';

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li className="PostInfo" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
