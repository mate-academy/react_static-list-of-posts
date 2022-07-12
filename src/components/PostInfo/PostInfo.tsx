import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post" data-cy="post-info">
    {post.user !== null ? <UserInfo user={post.user} /> : null}

    <p className="post__title" data-cy="post-title">
      {post.title}
    </p>

    <p className="post__body" data-cy="post-body">
      {post.body}
    </p>

    <CommentList comments={post.comment} />
  </div>
);
