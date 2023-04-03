import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/types';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} {...post} />
    ))}
  </div>
);
