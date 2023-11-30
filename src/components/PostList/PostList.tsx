import React from 'react';
import { PostInfo } from '../PostInfo';
import { PostListProps } from '../../types/PostList';

export const PostList: React.FC<PostListProps> = ({ postList }) => (
  <div className="PostList">
    {postList.map(post => (
      <PostInfo post={post} key={post.id} />
    ))}
  </div>
);
