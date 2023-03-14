import React from 'react';

import { Fullpost } from '../../types/Fullpost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Fullpost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo
        post={post}
        key={post.id}
      />
    ))}
  </div>
);
