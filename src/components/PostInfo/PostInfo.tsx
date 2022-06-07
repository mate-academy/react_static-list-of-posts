import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../app.typedef';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

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
    <div className="post" data-cy="post-info">
      <h2 className="post__title" data-cy="post-title">{title}</h2>
      <p className="post__body" data-cy="post-body">{body}</p>

      <div className="post__user">
        {user && (
          <UserInfo user={user} />
        )}
      </div>

      <div className="post__comments">
        <h4 className="post__comments-title">Comments:</h4>
        <CommentList comments={comments} />
      </div>
    </div>
  );
};
