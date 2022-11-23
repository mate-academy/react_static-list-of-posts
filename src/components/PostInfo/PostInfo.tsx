import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <div className="PostInfo__title">
        <strong>{title}</strong>
      </div>
      {user && (<UserInfo user={user} />)}
      <div className="PostInfo__body">
        {body}
      </div>
    </div>

    {comments.length > 0
      ? <CommentList comments={comments} />
      : (
        <div>
          <hr />
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        </div>
      )}
  </div>
);
