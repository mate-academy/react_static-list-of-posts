import React from 'react';
import { PostInfo } from '../PostInfo';

import { Post } from '../../types/Post';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <div className="PostInfo" key={post.id}>
        <PostInfo post={post} />
      </div>
    ))}
  </div>
);
