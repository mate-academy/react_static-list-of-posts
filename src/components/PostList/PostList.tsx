import React from 'react';

import './PostList.scss';
import { PostInfo } from '../PostInfo';
import { Post } from '../../types/post.js';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
