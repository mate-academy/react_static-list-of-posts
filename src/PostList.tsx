import React from 'react';
import { PreparePost } from './types/PreparePost';
import { PostInfo } from './PostInfo';

type Props = {
  posts: PreparePost[]
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostInfo post={post} />
      ))}
    </>
  );
};
