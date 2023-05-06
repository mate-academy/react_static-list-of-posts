import React from 'react';

import { PostInfo } from '../PostInfo';
import { PostWithUser } from '../../types';

type Props = {
  posts: PostWithUser[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <ul className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </ul>
);
