import React from 'react';
import { FullPost } from '../../types/post';
import { PostInfo } from '../PostInfo';

export type Props = {
  posts: FullPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
