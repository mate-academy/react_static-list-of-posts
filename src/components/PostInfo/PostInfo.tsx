import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  preparedPost: PreparedPost;
};

export const PostInfo: React.FC<Props> = ({ preparedPost }) => {
  const {
    title,
    body,
    user,
    comments,
  } = preparedPost;

  return (
    <div className="post-info" data-cy="post-info">
      <h2 data-cy="post-title">{title}</h2>
      <p data-cy="post-body">{body}</p>

      {user && (
        <UserInfo user={user} />
      )}

      <CommentList comments={comments} />
    </div>
  );
};
