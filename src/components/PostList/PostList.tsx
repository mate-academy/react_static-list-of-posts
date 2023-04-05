import React from 'react';
import { Post } from '../../types/PostInfo';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[]
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo
        post={post}
      />
    ))}
  </div>
);
