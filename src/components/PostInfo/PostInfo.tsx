import React from 'react';
import { PostWithUserAndComm } from '../../types/PostWithUserAndComm';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PostWithUserAndComm,
};

export const PostInfo: React.FC< Props > = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      {user && <UserInfo user={user} />}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comments
      ? <CommentList commentsList={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b> }
  </div>
);
