import React from 'react';

import './PostInfo.scss';
import { PostPrepared } from '../../types/postsPrepared';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

interface Props {
  post: PostPrepared,
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    userId,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        {user && <UserInfo key={userId} user={(user)} />}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {(comments && comments?.length > 0)
        ? <CommentList comments={comments} />
        : <b data-cy="NoCommentsMessage">No comments yet</b>}

    </div>
  );
};
