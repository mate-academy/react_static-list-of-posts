//react
import React from 'react';
//types
import { Post } from '../../types/types';
//components
import { PostInfo } from '../PostInfo';

type Props = {
  posts: Post[];
};

export const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map(post => (
        <PostInfo post={post} key={post.id} />
      ))}
    </>
  );
};
