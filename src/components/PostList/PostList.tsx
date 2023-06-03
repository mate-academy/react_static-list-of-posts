import React from 'react';

import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

type Propos = {
  posts: Post[];
};

export const PostList: React.FC<Propos> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
