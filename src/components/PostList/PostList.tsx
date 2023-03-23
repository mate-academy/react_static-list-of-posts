import React from 'react';

import { FullPostInfo } from '../../types/fullPostInfo';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: FullPostInfo[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
