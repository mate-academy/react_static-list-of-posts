import React from 'react';

import { PostType } from '../../Types/PostType';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: PostType[],
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
