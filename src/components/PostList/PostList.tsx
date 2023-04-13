import React from 'react';
import { ArrangedPost } from '../../types/ArrangedPost';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: ArrangedPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} />
    ))}
  </div>
);
