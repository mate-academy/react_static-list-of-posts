import React from 'react';
import { Post } from '../../types/Post';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<{ postListPosts: Post[] }> = ({
  postListPosts,
}) => {
  return (
    <div className="PostList">
      {postListPosts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  );
};
