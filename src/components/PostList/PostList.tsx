import React from 'react';

import { PostWithDetails } from '../../types';

import { PostInfo } from '../PostInfo';

interface PostListProp {
  posts: PostWithDetails[]
}

export const PostList: React.FC<PostListProp> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
