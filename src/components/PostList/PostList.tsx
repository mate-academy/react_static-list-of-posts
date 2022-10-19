import React from 'react';
import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo';

type Props = {
  allPosts: FullPost[]
};

export const PostList: React.FC<Props> = ({ allPosts }) => (
  <div className="PostList">
    {allPosts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
