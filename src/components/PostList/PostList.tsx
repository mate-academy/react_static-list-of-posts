import React from 'react';

import { FullPost } from '../../types/FullPosts';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: FullPost[]
}
export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
