import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { PreparedPost } from '../../app.typedef';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="post-info" data-cy="post-info">
      <h1 className="post-info__title" data-cy="post-title">
        {title}
      </h1>
      <p className="post-info__body" data-cy="post-body">
        {body}
      </p>

      <div className="post-info__by">
        {user && (
          <UserInfo user={user} />
        )}
      </div>
      <CommentList comments={comments} />
    </div>
  );
};
