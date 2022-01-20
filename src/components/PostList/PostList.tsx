import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';
import './PostList.scss';

export const PostList: React.FC<PreparedPost> = ({ posts }) => {
  return (
    <ul className="postList">
      {posts.map(post => (
        <PostInfo post={post} />
      ))}
    </ul>
  );
};
