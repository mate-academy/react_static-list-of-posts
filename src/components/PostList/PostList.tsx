import React from 'react';

import { TotalPostInfo } from '../../types/TotalPostInfo';
import { PostInfo } from '../PostInfo';
import './PostList.scss';

type Props = {
  posts: TotalPostInfo[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </ul>
);
