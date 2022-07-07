import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post-info" data-cy="post-info">
    <div className="post-info__title" data-cy="post-title">
      {post.title}
    </div>

    <div className="post-info__body" data-cy="post-body">
      {post.body}
    </div>

    <UserInfo user={post.user} />
    <div className="post-info__comment-list">
      <CommentList commentList={post.comments} />
    </div>

  </div>
);
