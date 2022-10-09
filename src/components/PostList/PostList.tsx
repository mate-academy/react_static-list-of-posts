import React from 'react';

import { PostListProps } from '../../types';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => <PostInfo post={post} key={post.id} />)}
  </div>
);
