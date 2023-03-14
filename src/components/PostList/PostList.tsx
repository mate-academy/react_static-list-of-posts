import React from 'react';
import { PostInfo } from '../PostInfo';
import { GlobalPost } from '../../types/GlobalPost';

type Props = {
  posts: GlobalPost[];
};

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList">
    {posts.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
