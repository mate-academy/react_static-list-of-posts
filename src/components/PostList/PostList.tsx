import React from 'react';
import './PostList.scss';

import { ExtendedPost } from '../../types';

import { PostInfo } from '../PostInfo';

interface Props {
  preparedPosts: ExtendedPost[];
}

export const PostList: React.FC<Props> = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map((post) => (
      <li key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
