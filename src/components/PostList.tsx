import React from 'react';
import { Post } from '../types/PostTypes';
import { PostInfo } from './PostInfo';

import './PostList.scss';

type Props = {
  listPosts: Post[];
};

export const PostList: React.FC<Props> = ({ listPosts = [] }) => (
  <ul data-cy="post-info">
    {listPosts.map(post => (
      <li key={post.id} data-cy="post-info-li">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
