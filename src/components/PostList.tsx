import React from 'react';
import { Post } from '../types/PostTypes';
import { PostInfo } from './PostInfo';

import './PostList.scss';

type Props = {
  listPosts: Post[];
};

export const PostList: React.FC<Props> = ({ listPosts = [] }) => (
  <ul data-cy="post-info" className="post__info">
    {listPosts.map(post => (
      <li key={post.id} className="post__info__list">
        <PostInfo {...post} />
      </li>
    ))}
  </ul>
);
