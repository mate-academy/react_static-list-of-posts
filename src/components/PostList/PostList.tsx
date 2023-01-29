import React from 'react';
import { FullPost } from '../../types/FullPost';
import { PostInfo } from '../PostInfo';

interface Props {
  fullPosts: FullPost[],
}

export const PostList: React.FC<Props> = ({ fullPosts }) => (
  <div className="PostList">
    {fullPosts.map((post) => <PostInfo post={post} />)}
  </div>
);
