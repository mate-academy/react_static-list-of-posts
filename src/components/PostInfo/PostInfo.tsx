import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { PostInfoType } from '../../type/post';
import './PostInfo.scss';

export const PostInfo: React.FC<PostInfoType> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && <UserInfo user={user} />}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments.length > 0 ? (
      <CommentList comments={comments} />
    ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </>
);
