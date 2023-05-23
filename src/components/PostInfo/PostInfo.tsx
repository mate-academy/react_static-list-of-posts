import React from 'react';
import { CommentList } from '../CommentList';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

type Props = {
  post: Posts;
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
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}
        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comments.length > 0
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
