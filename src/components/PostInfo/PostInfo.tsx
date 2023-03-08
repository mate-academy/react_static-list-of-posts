import React from 'react';

import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    comments,
    body,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && (
          <UserInfo user={user} />
        )}
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments.length === 0
        ? (
          <b data-cy="NoCommentsMessage">No comments yet</b>
        )
        : (
          <CommentList comments={comments} />
        )}
    </div>
  );
};
