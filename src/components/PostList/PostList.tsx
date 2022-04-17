import React from 'react';
import './PostList.scss';

import { PostInfo } from '../PostInfo';
import { Post } from '../types';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="post__list">
    {posts.map(post => (
      <li key={post.id} className="post__item">
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
