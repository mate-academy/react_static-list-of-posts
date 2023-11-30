// import React from 'react';
import { Post } from '../../types/post';

type PostType = {
  post: Post,
};

export const PostInfo = ({ post }: PostType) => {
  return (
    <p>{post.body}</p>
  );
};
