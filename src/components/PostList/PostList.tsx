import React from 'react';

import './PostList.scss';
import { PostInfo } from '../PostInfo';
import type { PostWithDetails } from '../../types';

type Props = {
  posts: PostWithDetails[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
