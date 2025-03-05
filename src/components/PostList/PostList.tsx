import React from 'react';
import { Post } from '../Types/Posts';
import { PostInfo } from '../PostInfo';

export const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </>
  );
};
