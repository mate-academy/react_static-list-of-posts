import React from 'react';
import { CommentType } from '../../Typedefs';

export const Post = ({ post }) => (
  <div>
    <h1>
      {post.title}
    </h1>
    <p>
      {post.body}
    </p>
  </div>
);

Post.propTypes = {
  post: CommentType.isRequired,
};
