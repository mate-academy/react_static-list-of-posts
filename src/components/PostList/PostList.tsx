import React from 'react';
import './PostList.scss';

import { PreparedPost } from '../../types/preparedPost';

import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: PreparedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => {
      return (
        <li key={post.id}>
          <PostInfo post={post} />
        </li>
      );
    })}
  </ul>
);
