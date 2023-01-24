import React from 'react';

import { TotalPostInfo } from '../../types/TotalPostInfo';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: TotalPostInfo[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </ul>
);
