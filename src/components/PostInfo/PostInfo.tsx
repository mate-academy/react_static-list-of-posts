import React from 'react';
import './PostInfo.scss';
import { PostWithComment } from '../../types/postWithComment';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: PostWithComment;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    user,
    body,
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
    { comments.length
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b> }
  </div>
);
