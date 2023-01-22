import React from 'react';

import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/Posts';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
