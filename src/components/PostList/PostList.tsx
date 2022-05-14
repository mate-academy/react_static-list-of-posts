import React from 'react';
import './PostList.scss';

import { FBPost } from '../../interfaces/FBPost';
import { PostInfo } from '../PostInfo';

interface Props {
  posts: FBPost[],
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostInfo post={post} />
    ))}
  </>
);
