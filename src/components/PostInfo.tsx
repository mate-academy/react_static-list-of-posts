import React from 'react';
import { Post } from '../types/Post';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  return (
    <>
      <p className="postTitle">{`Title: ${post.title}`}</p>
      <p>{post.body}</p>
    </>
  );
};
