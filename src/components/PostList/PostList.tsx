import React from 'react';
import { PostInfo } from '../PostInfo';

import { MergedPost } from '../../types/MergedPost';

interface Props {
  posts: MergedPost[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
