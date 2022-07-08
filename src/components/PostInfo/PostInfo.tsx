import React from 'react';
import { Post } from '../../type/Post';
import './PostInfo.scss';

type Props = {
  post: Post
};
export const PostInfo: React.FC <Props> = ({ post }) => (
  <div className="card-content" data-cy="post-info">
    <h2 data-cy="post-title">
      <strong>{post.title}</strong>
    </h2>
    <span data-cy="post-body">
      {post.body}
    </span>
  </div>

);
