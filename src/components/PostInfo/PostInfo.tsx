import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../type';
import { UserInfo } from '../UserInfo/UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo" data-cy="post-info">
    <p className="post__title" data-cy="post-title">
      {post.title}
    </p>

    <p className="post__body" data-cy="post-body">
      {post.body}
    </p>

    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </div>
);
