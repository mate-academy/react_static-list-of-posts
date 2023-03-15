import React from 'react';

import { Post } from '../../types/post';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} posts={posts} key={post.id} />
    ))}
  </div>
);
