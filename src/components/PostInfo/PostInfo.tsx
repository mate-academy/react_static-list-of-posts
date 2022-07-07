import React from 'react';
import { Post } from '../../types/post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post__item" data-cy="post-info">
    <>
      <p className="post__item-title" data-cy="post-title">
        {post.title}
      </p>

      <p className="post__item-body" data-cy="post-body">
        {post.body}
      </p>

      <UserInfo user={post.user} />
      <CommentList comments={post.comments} />
    </>
  </div>
);
