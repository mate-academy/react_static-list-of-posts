import React from 'react';
import './PostList.scss';

import { PreparedPost } from '../../types';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PreparedPost[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div>
    {posts.map((post: PreparedPost) => <PostInfo post={post} />)}
  </div>
);
