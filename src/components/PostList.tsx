import React from 'react';

import { Post } from '../types';
import { PostInfo } from './PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <li className="postList__item" key={post.id}>
        <PostInfo post={post} />
      </li>
    ))}
  </ul>
);
