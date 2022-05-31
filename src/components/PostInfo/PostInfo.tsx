import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

import { ExtendedPost } from '../../types';

interface Props {
  post: ExtendedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info">
    <h2 data-cy="post-title">
      {post.title}
    </h2>
    <p data-cy="post-body">
      {post.body}
    </p>
    { post.user && (
      <UserInfo user={post.user} />
    )}

    <CommentList comments={post.comments} />

  </div>
);
