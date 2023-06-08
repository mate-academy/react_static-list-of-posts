import React from 'react';
// eslint-disable-next-line import/extensions
import { Post } from '../../types';

import { PostInfo } from '../PostInfo';

interface Props {
  posts: Post[]
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
