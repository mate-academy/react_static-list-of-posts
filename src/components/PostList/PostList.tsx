import React from 'react';
import { PostInfo } from '../PostInfo';

import { PreparedPost } from '../../types/PreparedPost';

type Props = {
  posts: PreparedPost[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
