import React from 'react';
import { FullPosts } from '../../types/FullPosts';
import { PostInfo } from '../PostInfo';

type Props = {
  posts: FullPosts[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map((post) => (
      <PostInfo
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
