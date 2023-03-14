import React from 'react';
import { GlobalPost } from '../../types/GlobalPost';
import { PostInfo } from '../PostInfo';

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
