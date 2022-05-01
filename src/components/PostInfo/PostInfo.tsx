import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/Post';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post__info" data-cy="post-info">
    <h2 className="post__title" data-cy="post-title">
      {post.title}
    </h2>
    <p className="post__body" data-cy="post-body">
      {post.body}
    </p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);
