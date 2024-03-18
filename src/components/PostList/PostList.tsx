import React from 'react';
import { PostInfo } from '../PostInfo';

import { PopulatedComments } from '../../types/PopulatedComments';

type PostListProps = {
  posts: PopulatedComments[];
};

export const PostList: React.FC<PostListProps> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
