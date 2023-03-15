import React from 'react';

import { Posts } from '../../types/Posts';
import { PostInfo } from '../PostInfo/PostInfo';

type Props = {
  posts: Posts[]
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <PostInfo posts={post} key={post.id} />
      ))}
    </div>
  );
};
