import React from 'react';
import { PostInfo } from '../PostInfo';

import { CombinedType } from '../../types/CombinedType';

type Props = {
  posts: CombinedType[];
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
