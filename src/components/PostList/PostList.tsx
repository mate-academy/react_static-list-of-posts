import React from 'react';
import { FullPost } from '../../types/FullPosts';
import { PostInfo } from '../PostInfo';

import './PostList.scss';

type Props = {
  posts: FullPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
