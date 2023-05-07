import React from 'react';
import { TotalPost } from '../../types/totalpost';
import { PostInfo } from '../PostInfo';

type Props = {
  totalPosts: TotalPost[],
};

export const PostList: React.FC<Props> = ({ totalPosts }) => (
  <div className="PostList">
    {totalPosts.map(post => {
      return (
        <PostInfo key={post.id} post={post} />
      );
    })}
  </div>
);
