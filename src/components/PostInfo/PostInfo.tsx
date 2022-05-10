import React from 'react';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { Post } from '../../types/Post';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 data-cy="post-title" className="post__title">
      {post.title}
    </h2>

    <p data-cy="post-body" className="post__body">
      {post.body}
    </p>

    {post.user && (
      <UserInfo user={post.user} />
    )}

    <CommentList comments={post.commentsArr} />
  </>
);
