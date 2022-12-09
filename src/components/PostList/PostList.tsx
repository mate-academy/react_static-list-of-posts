import React from 'react';

import { PostInfo } from '../PostInfo/index';
import { Post } from '../../types/postsTypes';

type Props = {
  posts:Post[],
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => {
        return (
          <PostInfo post={post} key={post.id} />
        );
      })}
    </div>
  );
};
