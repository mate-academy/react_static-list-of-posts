import React from 'react';
import { Post } from '../../types/Posts';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title, user, body, comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      {user && (<UserInfo user={user} />)}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length
      ? (
        <CommentList comments={comments} />
      )
      : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
  </div>
);
