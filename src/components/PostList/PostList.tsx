import React from 'react';
import { Post } from '../../types';
import { PostInfo } from '../PostInfo/PostInfo';

interface Props {
  posts: Post[];
}

export const PostList: React.FC<Props> = ({ posts }) => (
  <div className="PostList" data-cy="post-list">
    {posts.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
