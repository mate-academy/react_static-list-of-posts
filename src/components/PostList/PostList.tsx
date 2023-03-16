import React from 'react';

import { PostInfo } from '../PostInfo';
import { Posts } from '../../types/posts';

type Props = {
  posts: Posts[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
