import React from 'react';
import { PreparedPost } from '../../types/preparedPosts';
import './PostInfo.scss';

type Props = {
  post: PreparedPost,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div
    className="postInfo"
    data-cy="post-info"
  >
    <h1
      className="postInfo__title"
      data-cy="post-title"
    >
      {post.title}
    </h1>
    <p
      className="postInfo__body"
      data-cy="post-body"
    >
      {post.body}
    </p>
  </div>
);
